//todo: make sure this string is correct with the cloud before pushing
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
    },
    {
        "favoritesList": [
            1186,
            4826
          ],
          "ssoID": "115977972820434863087",
          "token": "ya29.a0ARrdaM-gllnabAot9bYnQfKNH9Mblh9UnX8ju2ciPB4jTiV0qlac_cPcW5Oy4-Dadg-lx4AWXrtvrDog5oUgq_MCEfAXQfWWBgwj8Z8MT1pkoc5-uGPWNKygEnPo7pahaFPlasbsKwdCBtfuaB8YlOx5vwu3",
          "displayName": "Seattle U Test",
    },
    {
        "favoritesList": [
            3297,
            3454,
            1352
          ],
          "ssoID": "103549611344018177717",
          "token": "ya29.a0ARrdaM8ItthMyBEVGJZQASDmATatzHtFo28aZDE78iMSXwehR3vqO-IYGIVP571Q2cpdKeEWHewt0Hpj3IQtvA2HXg6LyHxq9N3loAY0qnXt1X1kGDisMnO0DRavOWQRgP-rLjgKduP3yUxB_rToik4ThxrK",
          "displayName": "Avery Dinh",
    }
]
);