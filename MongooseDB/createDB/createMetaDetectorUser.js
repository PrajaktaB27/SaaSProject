db = db.getSiblingDB('metaverseData')

db.createCollection('users')
tilesCollection = db.getCollection("users")
tilesCollection.remove({})

tilesCollection.insertMany([
        {
            ssoID: {
                type: "123",
                required: true,
                unique: true,
              },
              // userId: String,
              email: "username@gmail.com",
              favoritesList: [
                  1186,
                  4826
              ], // Estate IDs
        }
    ]
);