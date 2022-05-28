import * as express from "express";
import * as bodyParser from "body-parser";
import * as crypto from "crypto";
import { TileModel } from "./model/TileModel";
import { TweetModel } from "./model/TweetModel";
import { UserModel } from "./model/UserModel";

// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  public expressApp: express.Application;
  public Tiles: TileModel;
  public Tweets: TweetModel;
  public Users: UserModel;
  private static API_KEY: number = 123;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.Tiles = new TileModel();
    this.Tweets = new TweetModel();
    this.Users = new UserModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));

    //CORS set up to allow access from Angular
    this.expressApp.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
      );
      next();
    });
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    // router.get("/app/user/:id/favoritesList", async (req, res) => {
    //   var id = req.query.id;
    //   console.log("Query for favorites list of user id:" + id);
    //   let favoritesList = await this.Users.retrieveFavoriteEstates({
    //     email: id,
    //   });

    //   res.send(favoritesList);
    // });

    router.get("/app/tile", (req, res) => {
      if (req.url.includes("?")) {
        var xCor = parseInt(req.query.x);
        var yCor = parseInt(req.query.y);
        var id = `${xCor},${yCor}`;
        console.log(`Query single tile with coordinates: (${xCor}, ${yCor})`);
        this.Tiles.retrieveTileById(res, { tileId: id });
      } else {
        res.status(400);
        res.send("Please provide tile coordinates (x, y)");
      }
    });

    // get request for all tiles filtered by distinct estate ID
    router.get("/app/allTiles", async (req, res) => {
      console.log("Query for all tiles based on distinct estate id");
      let tilesList = await this.Tiles.retrieveAllTiles();

      res.send(tilesList);
    });

    router.get("/app/tile/estate/:id", (req, res) => {
      var id = parseInt(req.params.id);
      console.log("Query for all tiles in estate " + id);
      this.Tiles.retrieveAllTilesInEstate(res, { estateId: id });
    });

    router.get("/app/tile/type/:typeValue", async (req, res) => {
      var typeValue = req.params.typeValue;
      console.log("Query for a tile with type: " + typeValue);
      let tileList = await this.Tiles.retrieveTilesOfSpecificType({type: typeValue});
      res.json(tileList);
    });

    router.get("/app/estates/type/:typeValue", (req, res) => {
      var typeValue = req.params.typeValue;
      console.log("Query for unique estates that are have type=" + typeValue);
      this.Tiles.retrieveEstateIdsOfSpecificType(res, { type: typeValue });
    });

    router.get("/app/tweets", (req, res) => {
      console.log("Query for all tweets");
      this.Tweets.retrieveAllTweets(res);
    });

    router.post("/app/tiles", (req, res, next) => {
      // Verify API key in header before processing the request
      if (req.headers["api-key"] == null) {
        const message = "Missing required authorization header: api-key";
        console.log(message);
        res.status(400);
        res.send(message);
        return;
      }

      // Verify API key is correct
      if (parseInt(req.headers["api-key"].toString()) != App.API_KEY) {
        const message = `Unauthorized request to ${req.url}, please check the api-key header.`;
        console.log(message);
        res.status(401);
        res.send(message);
        return;
      }

      //Do a get call to metaverse
      const request = require("request");
      let maxResults = 10000;
      let counter = 0;

      let model = this.Tiles.model; //alias to be used in the callback, scope issue
      request(
        "https://api.decentraland.org/v2/tiles?include=id,type,updatedAt,name,owner,estateId,tokenId,price",
        (err, response, body) => {
          if (!err && response.statusCode == 200) {
            let result = JSON.parse(body).data;
            for (var tileId in result) {
              let newEntry = JSON.parse(JSON.stringify(result[tileId])); //copy data to a new variable
              newEntry._id = tileId; // set our db id to the decentraland id
              newEntry.tileId = tileId; // set tileID to the decentraland id

              //Put each item in the DB0
              model.create(newEntry, (err) => {
                if (err) {
                  console.log("Possible duplicate tile! Tile creation failed!");
                }
              });
              //Only storing 1 item for now, but eventually we would want to do a real update on every single item
              //break;
              counter++;
              if (counter == maxResults) {
                break;
              }
            }
            res.send("New items added");
          } else {
            console.log("Failed to fetch data from external server.");
            res.send("Update failed");
          }
        }
      );
    });

    this.expressApp.use("/", router);

    this.expressApp.use("/app/json/", express.static(__dirname + "/app/json"));
    this.expressApp.use("/images", express.static(__dirname + "/img"));
    this.expressApp.use("/", express.static(__dirname + "/pages"));
  }
}

export { App };
