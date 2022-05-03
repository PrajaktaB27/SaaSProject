import Mongoose = require("mongoose");
import internal = require("stream");

interface ITweetModel extends Mongoose.Document {
    tweetId: string,
    userID: string,
    tweetDescription: string,
    tweetDate: Date
}
export {ITweetModel};