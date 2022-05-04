db = db.getSiblingDB('metaverseData')

db.createCollection('tiles')
tilesCollection = db.getCollection("tiles")
tilesCollection.remove({})

tilesCollection.insert(
	{
		tileId: "-150,150",
                x: -150,
                y: 150,
                updatedAt: 1543335084,
                type: "district",
                top: true,
                left: false,
                topLeft: false,
                estateId: 1186,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921686"
	}
)

tilesCollection.insert(
	{
		tileId: "-150,149",
                x: -150,
                y: 149,
                updatedAt: 1543335084,
                type: "district",
                top: true,
                left: false,
                topLeft: false,
                estateId: 1186,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921685"
	}
)

tilesCollection.insert(
	{
		tileId: "-150,148",
                x: -150,
                y: 148,
                updatedAt: 1543335084,
                type: "district",
                top: true,
                left: false,
                topLeft: false,
                estateId: 1186,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921684"
	}
)

tilesCollection.insert(
	{
		tileId: "-150,79",
                x: -150,
                y: 79,
                updatedAt: 1543335274,
                type: "district",
                top: true,
                left: false,
                topLeft: false,
                estateId: 1183,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921615"
	}
)

tilesCollection.insert(
	{
                tileId: "-150,78",
                x: -150,
                y: 78,
                updatedAt: 1543335274,
                type: "district",
                top: true,
                left: false,
                topLeft: false,
                estateId: 1183,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921614"
        }
)

tilesCollection.insert(
        {
                tileId: "-91,150",
                x: -91,
                y: 150,
                updatedAt: 1582548358,
                type: "district",
                top: true,
                left: true,
                topLeft: true,
                estateId: 1191,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907822304289275835163864290494731622222397590"
        }
)

tilesCollection.insert(
        {
                tileId: "-91,149",
                x: -91,
                y: 149,
                updatedAt: 1582548358,
                type: "district",
                top: true,
                left: true,
                topLeft: true,
                estateId: 1191,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907822304289275835163864290494731622222397589"
        }
)

tilesCollection.insert(
        {
                tileId: "-91,148",
                x: -91,
                y: 148,
                updatedAt: 1582548358,
                type: "district",
                top: true,
                left: true,
                topLeft: true,
                estateId: 1191,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907822304289275835163864290494731622222397588"
        }
)

tilesCollection.insert(
        {
                tileId: "-91,147",
                x: -91,
                y: 147,
                updatedAt: 1582548358,
                type: "district",
                top: true,
                left: true,
                topLeft: true,
                estateId: 1191,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907822304289275835163864290494731622222397587"
        }
)

tilesCollection.insert(
        {
                tileId: "-91,146",
                x: -91,
                y: 146,
                updatedAt: 1582548358,
                type: "district",
                top: true,
                left: true,
                topLeft: true,
                estateId: 1191,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907822304289275835163864290494731622222397586"
        }
)

db.createCollection('tweets')
tweetsCollection = db.getCollection("tweets")
tweetsCollection.remove({})

tweetsCollection.insert(
        {
                tweetID: "1234",
                tweetDescription: "Check out my estate in Decentraland",
                tweetDate: "2022-04-27"
        }
)

tweetsCollection.insert(
        {
                tweetID: "5678",
                tweetDescription: "Spent all my Ethereum in the #metaverse",
                tweetDate: "2022-05-01"
        }
)

tweetsCollection.insert(
        {
                tweetID: "9912",
                tweetDescription: "My neighbors are really annoying",
                tweetDate: "2022-04-13"
        }
)
