"use strict";
exports.__esModule = true;
exports.App = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var TileModel_1 = require("./model/TileModel");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.Tiles = new TileModel_1.TileModel();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        router.get('/app/tile', function (req, res) {
            if (req.url.includes('?')) {
                var xCor = parseInt(req.query.x);
                var yCor = parseInt(req.query.y);
                console.log('Query single tile with id: ' + xCor + yCor);
                _this.Tiles.retrieveTileById(res, { $and: [{ x: xCor }, { y: yCor }] });
            }
            else {
                res.status(400);
                res.send('Please provide tile coordinates (x, y)');
            }
        });
        router.get('/app/tile/:estateId', function (req, res) {
            var estateId = parseInt(req.params.estateId);
            console.log('Query for all tiles in estate ' + estateId);
            _this.Tiles.retrieveAllTilesInEstate(res, { estateId: estateId });
        });
        router.post('/app/updateTiles', function (req, res, next) {
            //Do a get call to metaverse
            var request = require('request');
            var model = _this.Tiles.model; //alias to be used in the callback, scope issue
            request('https://api.decentraland.org/v2/tiles', function (err, response, body) {
                if (!err && response.statusCode == 200) {
                    var result = JSON.parse(body).data;
                    for (var item in result) {
                        //console.log(JSON.stringify(result[item]));
                        //Put each item in the DB
                        model.create([result[item]], function (err) {
                            if (err) {
                                console.log('Tile creation failed!');
                            }
                        });
                        //Only storing 1 item for now, but eventually we would want to do a real update on every single item
                        break;
                    }
                }
                else {
                    console.log('Failed to fetch data from external server.');
                }
            });
            res.send('Update completed');
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
