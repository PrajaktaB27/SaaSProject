"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAccess = void 0;
const Mongoose = require("mongoose");
class DataAccess {
    //static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3000/metaverseData?authSource=admin'; -- logging in with user and password didn't work
    constructor() {
        DataAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", () => {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    }
}
exports.DataAccess = DataAccess;
DataAccess.DB_CONNECTION_STRING = 'mongodb://localhost:3000/metaverseData?authSource=admin';
DataAccess.connect();
