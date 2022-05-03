import Mongoose = require("mongoose");
import {DataAccess} from '../DataAccess';
import {ITweetModel} from '../interfaces/ITweetModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class TweetModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                tweetId: String,
                userID: String,
                tweetDescription: String,
                tweetDate: Date
            }, {collection: 'tweets'}
        );
    }

    public createModel(): void {
        this.model = mongooseConnection.model<ITweetModel>("Tweet", this.schema);
    }

    public retrieveTweetById(response:any, filter:Object): any {
        var query = this.model.findOne(filter);
        query.exec( (err, tile) => {
            console.log(tile);
            response.json(tile);
        });
    }

    public retrieveAllTweets(response:any, filter:Object): any {
        var query = this.model.find(filter);
        query.exec( (err, tileList) => {
            console.log(tileList);
            response.json(tileList);
        });
    }
}
export {TweetModel};