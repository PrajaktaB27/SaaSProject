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
        email: String,
        favoritesList: [Number], // Estate IDs
      }, { collection: "users" }
    );
  }

  public createModel(): void {
    this.model = mongooseConnection.model<IUserModel>("User", this.schema);
  }

  public async retrieveFavoriteEstates(id: string, res: any): Promise<Number[]> {
    try {
      var user = await this.model.findOne({ssoID: id});
      console.log(user);
      return user["favoritesList"];
    } catch (error) {
      res.status(400);
      error.message = "Cannot find user with id: " + id;
      return error.message;
    }
  }
  
}
export { UserModel };
