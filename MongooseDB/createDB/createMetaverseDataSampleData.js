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
		id: "-150,79",
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
        id: "-150,78",
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
