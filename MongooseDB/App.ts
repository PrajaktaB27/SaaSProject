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

    this.expressApp.use('/', router);

    this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
    this.expressApp.use('/images', express.static(__dirname+'/img'));
    this.expressApp.use('/', express.static(__dirname+'/pages'));
    
  }

}

export {App};