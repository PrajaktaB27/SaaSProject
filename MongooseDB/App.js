"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express = require("express");
const bodyParser = require("body-parser");
const TileModel_1 = require("./model/TileModel");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.Tiles = new TileModel_1.TileModel();
    }
    // Configure Express middleware.
    middleware() {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
        let router = express.Router();
        router.get('/app/tile', (req, res) => {
            if (req.url.includes('?')) {
                var xCor = parseInt(req.query.x);
                var yCor = parseInt(req.query.y);
                console.log('Query single tile with id: ' + xCor + yCor);
                this.Tiles.retrieveTileById(res, { $and: [{ x: xCor }, { y: yCor }] });
            }
            else {
                res.status(400);
                res.send('Please provide tile coordinates (x, y)');
            }
        });
        router.get('/app/tile/:estateId', (req, res) => {
            var estateId = parseInt(req.params.estateId);
            console.log('Query for all tiles in estate ' + estateId);
            this.Tiles.retrieveAllTilesInEstate(res, { estateId: estateId });
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    }
}
exports.App = App;
