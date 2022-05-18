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
            _id: String,
            tileId: String,
            type: String,
            updatedAt: Number,
            name: String,
            owner: String,
            estateId: Number,
            tokenId: String,
            price: Number
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
    TileModel.prototype.retrieveTilesOfSpecificType = function (response, filter) {
        var query = this.model.find(filter);
        query.exec(function (err, tileList) {
            console.log(tileList);
            response.json(tileList);
        });
    };
    TileModel.prototype.retrieveEstateIdsOfSpecificType = function (response, filter) {
        var query = this.model.find(filter).distinct("estateId");
        query.exec(function (err, estateIdList) {
            console.log(estateIdList);
            response.json(estateIdList);
        });
    };
    return TileModel;
}());
exports.TileModel = TileModel;
