"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TileModel = void 0;
const Mongoose = require("mongoose");
const DataAccess_1 = require("../DataAccess");
let mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
let mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
class TileModel {
    constructor() {
        this.createSchema();
        this.createModel();
    }
    createSchema() {
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
    }
    createModel() {
        this.model = mongooseConnection.model("Tile", this.schema);
    }
    retrieveTileById(response, filter) {
        var query = this.model.findOne(filter);
        query.exec((err, tile) => {
            console.log(tile);
            response.json(tile);
        });
    }
    retrieveAllTilesInEstate(response, filter) {
        var query = this.model.find(filter);
        query.exec((err, tileList) => {
            console.log(tileList);
            response.json(tileList);
        });
    }
}
exports.TileModel = TileModel;
