"use strict";
exports.__esModule = true;
exports.TileModel = void 0;
var Mongoose = require("mongoose");
var DataAccess_1 = require("../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var TileModel = /** @class */ (function () {
    function TileModel() {
        this.createSchema();
        this.createModel();
    }
    TileModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
            tileId: String,
            x: Number,
            y: Number,
            updatedAt: Number,
            type: String,
            top: Boolean,
            left: Boolean,
            topLeft: Boolean,
            estateId: Number,
            owner: String,
            tokenId: String
        }, { collection: 'tiles' });
    };
    TileModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Tile", this.schema);
    };
    TileModel.prototype.retrieveTileById = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, tile) {
            console.log(tile);
            response.json(tile);
        });
    };
    TileModel.prototype.retrieveAllTilesInEstate = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, tileList) {
            console.log(tileList);
            response.json(tileList);
        });
    };
    return TileModel;
}());
exports.TileModel = TileModel;
