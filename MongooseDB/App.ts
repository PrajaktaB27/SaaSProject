import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as crypto from 'crypto';
import { TileModel } from './model/TileModel';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public expressApp: express.Application;
  public Tiles:TileModel;

  //Run configuration methods on the Express instance.
  constructor() {
    this.expressApp = express();
    this.middleware();
    this.routes();
    this.Tiles = new TileModel();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.expressApp.use(bodyParser.json());
    this.expressApp.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    let router = express.Router();

    router.get('/app/tile', (req, res) => {
      if (req.url.includes('?')) {
        var xCor = parseInt(req.query.x);
        var yCor = parseInt(req.query.y);
        console.log('Query single tile with id: ' + xCor + yCor);
        this.Tiles.retrieveTileById(res, {$and:[{x: xCor}, {y: yCor}]});
      } else {
        res.status(400);
        res.send('Please provide tile coordinates (x, y)');
      }
    });

    router.get('/app/tile/:estateId', (req, res) => {
      var estateId = parseInt(req.params.estateId);
      console.log('Query for all tiles in estate ' + estateId);
      this.Tiles.retrieveAllTilesInEstate(res, {estateId: estateId});
    });

    router.post('/app/updateTiles', (req, res, next) => {
      //Do a get call to metaverse
      const request = require('request');
      request('https://api.decentraland.org/v2/tiles', function (err, response, body) {
        if (!err && response.statusCode == 200) {
        //console.log(body)
        let data = JSON.parse(body);
        let counter = 0;
        for(var item in data){
          console.log(data[item].id);
          break;
        }
        
        //Take the first item only
        /* this.Tiles.model.create( [data[0]], (err) => {
          if (err){
            console.log('Tile creation failed!');
          }
          if(!err){
            console.log(data[0]);
          }
        }); */
        //res.send('{"id":' + data[0].tileId + "}")
        }
      })
      
      //var sum = query.var1 + query.var2;
      //var msg = 'addition of ' + value1 + ' plus ' + value2 + ' equals ' + sum;
  
      //console.log(msg);
      //res.send(msg);
  });

    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
    
  }

}

export {App};