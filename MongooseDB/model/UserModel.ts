import Mongoose = require("mongoose");
import { DataAccess } from "../DataAccess";
import { IUserModel } from "../interfaces/IUserModel";

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class UserModel {
  public schema: any;
  public model: any;

  public constructor() {
    this.createSchema();
    this.createModel();
  }

  public createSchema(): void {
    this.schema = new Mongoose.Schema(
      {
        ssoID: {
          type: String,
          required: true,
          unique: true,
        },
        // userId: String,
        email: String,
        favoritesList: [Number], // Estate IDs
      },
      { collection: "users" }
    );
  }

  public createModel(): void {
    this.model = mongooseConnection.model<IUserModel>("User", this.schema);
  }

  // {userID: id}
  public async retrieveFavoriteEstates(filter: Object): Promise<Number[]> {
    var user = await this.model.findOne(filter);
    console.log(user);
    return user.favoritesList;
  }
}
export { UserModel };
