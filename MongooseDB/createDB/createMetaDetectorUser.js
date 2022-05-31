db = db.getSiblingDB('metaDetector')

db.createCollection('users')
tilesCollection = db.getCollection("users")
tilesCollection.remove({})

tilesCollection.insertMany([
    {
        ssoID: "123",
        email: "username@gmail.com",
        favoritesList: [
            1186,
            4826
        ], // Estate IDs
    }
]
);