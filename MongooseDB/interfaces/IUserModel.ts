import Mongoose = require("mongoose");
import internal = require("stream");

interface IUserModel extends Mongoose.Document {
  ssoID: {
    type: string;
    required: true;
    unique: true;
  };

  email: String;
  favoritesList: number[]; // Estate IDs
}
export { IUserModel };
