db = db.getSiblingDB('metaverseData')

db.createCollection('tiles')
tilesCollection = db.getCollection("tiles")
tilesCollection.remove({})

tilesCollection.insertMany([
        {
                _id: "-150,150",
                tileId: "-150,150",
                type: "unowned",
                updatedAt: 1543335084,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                estateId: 1186,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921686"
        },
        {
                _id: "-150,149",
                tileId: "-150,149",
                type: "unowned",
                updatedAt: 1543335084,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                estateId: 1186,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921685"
        },
        {
                _id: "-150,148",
                tileId: "-150,148",
                type: "unowned",
                updatedAt: 1543335084,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                estateId: 1186,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921684"
        },
        {
                _id: "-150,147",
                tileId: "-150,147",
                type: "unowned",
                updatedAt: 1543335084,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                estateId: 1186,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921683"
        },
        {
                _id: "-150,146",
                tileId: "-150,146",
                type: "unowned",
                updatedAt: 1543335084,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                estateId: 1186,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921682"
        },
        {
                _id: "-150,145",
                tileId: "-150,145",
                type: "unowned",
                updatedAt: 1543335084,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                estateId: 1186,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921681"
        },
        {
                _id: "-150,144",
                tileId: "-150,144",
                type: "unowned",
                updatedAt: 1543335084,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                estateId: 1186,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921680"
        },
        {
                _id: "-150,143",
                tileId: "-150,143",
                type: "unowned",
                updatedAt: 1543335084,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                estateId: 1186,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921679"
        },
        {
                _id: "-150,142",
                tileId: "-150,142",
                type: "unowned",
                updatedAt: 1543335084,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                estateId: 1186,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921678"
        },
        {
                _id: "-150,141",
                tileId: "-150,141",
                type: "unowned",
                updatedAt: 1543335084,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                estateId: 1186,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921677"
        },
        {
                _id: "-150,41",
                tileId: "-150,41",
                type: "owned",
                updatedAt: 1643767143,
                name: "MetaX (Discord JG#9461)",
                owner: "0xed07d4fc439ed39b0df22ddc80cbd44aa6a0adc3",
                estateId: 4573,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921577"
        },
        {
                _id: "-150,40",
                tileId: "-150,40",
                type: "owned",
                updatedAt: 1516573628,
                owner: "0x38001a6ab8d70bab89333d9e945c847cbeb8c477",
                estateId: 6963,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921576"
        },
        {
                _id: "-150,39",
                tileId: "-150,39",
                type: "owned",
                updatedAt: 1516573548,
                owner: "0x38001a6ab8d70bab89333d9e945c847cbeb8c477",
                estateId: 6963,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921575"
        },
        {
                _id: "-150,38",
                tileId: "-150,38",
                type: "owned",
                updatedAt: 1516578378,
                owner: "0x38001a6ab8d70bab89333d9e945c847cbeb8c477",
                estateId: 6963,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921574"
        },
        {
                _id: "-150,37",
                tileId: "-150,37",
                type: "owned",
                updatedAt: 1516578305,
                owner: "0x38001a6ab8d70bab89333d9e945c847cbeb8c477",
                estateId: 6963,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921573"
        },
        {
                _id: "-150,36",
                tileId: "-150,36",
                type: "owned",
                updatedAt: 1516577990,
                owner: "0x38001a6ab8d70bab89333d9e945c847cbeb8c477",
                estateId: 6963,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921572"
        },
        {
                _id: "-150,35",
                tileId: "-150,35",
                type: "owned",
                updatedAt: 1516578677,
                owner: "0x38001a6ab8d70bab89333d9e945c847cbeb8c477",
                estateId: 6963,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921571"
        },
        {
                _id: "-150,34",
                tileId: "-150,34",
                type: "owned",
                updatedAt: 1516578677,
                owner: "0x38001a6ab8d70bab89333d9e945c847cbeb8c477",
                estateId: 6963,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921570"
        },
        {
                _id: "-150,33",
                tileId: "-150,33",
                type: "road",
                updatedAt: 1635672120,
                name: "Roads",
                owner: "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce",
                estateId: 1827,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921569"
        },
        {
                _id: "-150,32",
                tileId: "-150,32",
                type: "owned",
                updatedAt: 1630694226,
                name: "FMF365.com Decentraland HQ",
                owner: "0x3ec7e89506e2493a4e4dab96b9b71192af379d1b",
                estateId: 1352,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921568"
        },
        {
                _id: "-150,31",
                tileId: "-150,31",
                type: "owned",
                updatedAt: 1581138124,
                name: "Roberts' Roost",
                owner: "0xf164416c99f8e065e25314452125dfc962c8d2b6",
                estateId: 3297,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921567"
        },
        {
                _id: "-150,30",
                tileId: "-150,30",
                type: "owned",
                updatedAt: 1581138124,
                name: "Roberts' Roost",
                owner: "0xf164416c99f8e065e25314452125dfc962c8d2b6",
                estateId: 3297,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921566"
        },
        {
                _id: "-150,29",
                tileId: "-150,29",
                type: "owned",
                updatedAt: 1581138124,
                name: "Roberts' Roost",
                owner: "0xf164416c99f8e065e25314452125dfc962c8d2b6",
                estateId: 3297,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921565"
        },
        {
                _id: "-150,28",
                tileId: "-150,28",
                type: "owned",
                updatedAt: 1540746707,
                owner: "0x80034d6bc6991eb9894fc0f57f560ba44c06a94c",
                estateId: 4896,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921564"
        },
        {
                _id: "-150,27",
                tileId: "-150,27",
                type: "road",
                updatedAt: 1635672120,
                name: "Roads",
                owner: "0x9a6ebe7e2a7722f8200d0ffb63a1f6406a0d7dce",
                estateId: 1827,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921563"
        },
        {
                _id: "-150,26",
                tileId: "-150,26",
                type: "owned",
                updatedAt: 1583053601,
                name: "boxdub",
                owner: "0xa5be2382a421dba80540ab2999e003edc546f98e",
                estateId: 3454,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921562"
        },
        {
                _id: "-150,25",
                tileId: "-150,25",
                type: "owned",
                updatedAt: 1583053601,
                name: "boxdub",
                owner: "0xa5be2382a421dba80540ab2999e003edc546f98e",
                estateId: 3454,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921561"
        },
        {
                _id: "-150,24",
                tileId: "-150,24",
                type: "owned",
                updatedAt: 1636953773,
                name: "Fashion District Parcel (2)",
                owner: "0xc38fdf66cabfcecde18de56dad21dd8cc9c74463",
                estateId: 7643,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921560"
        },
        {
                _id: "-150,23",
                tileId: "-150,23",
                type: "owned",
                updatedAt: 1592193282,
                name: "Estate in exclusive Area🤩🙌🏼🚀",
                owner: "0x4ae4974f9e680415fb12d295fd326d47e8ac1fec",
                estateId: 3011,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921559"
        },
        {
                _id: "-150,10",
                tileId: "-150,10",
                type: "unowned",
                updatedAt: 1653054427,
                name: "Fashion Corner (@favid#5317 on discord)",
                owner: "0xf519172dc3cc531786db0db7292a51a1bcfa7d82",
                estateId: 4826,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921546",
                price: 32500
        },
        {
                _id: "-150,9",
                tileId: "-150,9",
                type: "unowned",
                updatedAt: 1653054427,
                name: "Fashion Corner (@favid#5317 on discord)",
                owner: "0xf519172dc3cc531786db0db7292a51a1bcfa7d82",
                estateId: 4826,
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921545",
                price: 32500
        },
        {
                _id: "-150,-80",
                tileId: "-150,-80",
                type: "owned",
                updatedAt: 1645216787,
                name: "The Riverside",
                owner: "0xaf3e9ef83b1dc9db18cd5923e3112f6cd8bfdaed",
                estateId: 2463,
                tokenId: "115792089237316195423570985008687907802567911994420732983414767500579666132912",
                price: 11000
        },
        {
                _id: "-150,-146",
                tileId: "-150,-146",
                type: "owned",
                updatedAt: 1640335136,
                owner: "0x5b3d787303d8127e66f7238274fae328896fd199",
                estateId: 8153,
                tokenId: "115792089237316195423570985008687907802567911994420732983414767500579666132846",
                price: 7788
        },
        {
                _id: "-149,10",
                tileId: "-149,10",
                type: "unowned",
                updatedAt: 1653054427,
                name: "Fashion Corner (@favid#5317 on discord)",
                owner: "0xf519172dc3cc531786db0db7292a51a1bcfa7d82",
                estateId: 4826,
                tokenId: "115792089237316195423570985008687907802567911994420732983414767500579666133002",
                price: 32500
        },
])

db.createCollection('tweets')
tweetsCollection = db.getCollection("tweets")
tweetsCollection.remove({})

tweetsCollection.insertMany([
        {
                authorID: "1146202351",
                tweetID: "1521966682847252480",
                tweetDescription: "@AltcoinDailyio METAFLUENCE CITY 🔥🔥🔥\n\n$METO #METO #MATAFLUENCE #METAVERSE #METAHUT #LAND #NFT #ECOMMERCE #EVENTS #SHOPPING #INFLUENCERS #CELEBRITIES #BRANDS #AR #VR  @metafluence @keepface_global https://t.co/ShDMBp6qmZ",
                tweetDate: "2022-05-04T21:35:08.000Z"
        },
        {
                authorID: "1146202351",
                tweetID: "1521966430832537601",
                tweetDescription: "@ValaAfshar @nasscom METAFLUENCE CITY 🔥🔥🔥\n\n$METO #METO #MATAFLUENCE #METAVERSE #METAHUT #LAND #NFT #ECOMMERCE #EVENTS #SHOPPING #INFLUENCERS #CELEBRITIES #BRANDS #AR #VR @metafluence @keepface_global https://t.co/njrskibZOK",
                tweetDate: "2022-05-04T21:34:08.000Z"
        },
        {
                authorID: "1514306611669524486",
                tweetID: "1521966122865672192",
                tweetDescription: "RT @bavitamin: @binance #ceek #Metaverse #nft #land https://t.co/RmB4PvJ5JH",
                tweetDate: "2022-05-04T21:32:55.000Z"
        },
        {
                authorID: "1146202351",
                tweetID: "1521965609491353604",
                tweetDescription: "@Cointelegraph @arieli METAFLUENCE CITY 🔥🔥🔥\n\n$METO #METO #MATAFLUENCE #METAVERSE #METAHUT #LAND #NFT #ECOMMERCE #EVENTS #SHOPPING #INFLUENCERS #CELEBRITIES #BRANDS #AR #VR @metafluence @keepface_global https://t.co/qfJXRRMDHP",
                tweetDate: "2022-05-04T21:30:52.000Z"
        },
        {
                authorID: "1146202351",
                tweetID: "1521964987064979457",
                tweetDescription: "@BitMartExchange @metafluence METAFLUENCE CITY 🔥🔥🔥\n\n$METO #METO #MATAFLUENCE #METAVERSE #METAHUT #LAND #NFT #ECOMMERCE #EVENTS #SHOPPING #INFLUENCERS #CELEBRITIES #BRANDS #AR #VR @metafluence @keepface_global https://t.co/KpEsMjVJRy",
                tweetDate: "2022-05-04T21:28:24.000Z"
        },
        {
                authorID: "1440038177067003907",
                tweetID: "1521964848862703620",
                tweetDescription: "RT @RenzoSoriano3: @Gemini The future is coming and you should see this project @Gamiumcorp \n\nVirtual Portal jobs\nBridge between NFTs \nSoci…",
                tweetDate: "2022-05-04T21:27:51.000Z"
        },
        {
                authorID: "1146202351",
                tweetID: "1521964825496150019",
                tweetDescription: "@startup_space1 @gamiworld @metafluence METAFLUENCE CITY 🔥🔥🔥\n\n$METO #METO #MATAFLUENCE #METAVERSE #METAHUT #LAND #NFT #ECOMMERCE #EVENTS #SHOPPING #INFLUENCERS #CELEBRITIES #BRANDS #AR #VR @metafluence @keepface_global https://t.co/G7bo1ZUHV9",
                tweetDate: "2022-05-04T21:27:45.000Z"
        },
        {
                authorID: "1146202351",
                tweetID: "1521964717354491911",
                tweetDescription: "@cd2yvma5Zx4z7V3 @eminvaliyev @metafluence METAFLUENCE CITY 🔥🔥🔥\n\n$METO #METO #MATAFLUENCE #METAVERSE #METAHUT #LAND #NFT #ECOMMERCE #EVENTS #SHOPPING #INFLUENCERS #CELEBRITIES #BRANDS #AR #VR @metafluence @keepface_global https://t.co/D6Nlr3DYyd",
                tweetDate: "2022-05-04T21:27:20.000Z"
        },
        {
                authorID: "1521956914455711745",
                tweetID: "1521964360968646656",
                tweetDescription: "RT @coinmuhendisim: Arsa satışına katılarak yaklaşık 17 kat kazanç elde ettiğimiz @CryptoverseVIP arazi güncellemesi yaptığını duyurdu 📣\n\n📌…",
                tweetDate: "2022-05-04T21:25:55.000Z"
        },
        {
                authorID: "1480598975929622528",
                tweetID: "1521964121880735744",
                tweetDescription: "RT @RenzoSoriano3: @Gemini The future is coming and you should see this project @Gamiumcorp \n\nVirtual Portal jobs\nBridge between NFTs \nSoci…",
                tweetDate: "2022-05-04T21:24:58.000Z"
        }
]);

db.createCollection('marketplaces')
marketplacesCollection = db.getCollection("marketplaces")
marketplacesCollection.remove({})

marketplacesCollection.insertMany([
        {
                _id: "TS1",
                metaverse: "The Sandbox",
                salesLastDay: 196150467.38,
                salesLastWeek:3444451390.33
        },
        {
                _id: "DL2",
                metaverse: "Decentraland",
                salesLastDay: 37699083.15,
                salesLastWeek:449521042.33
        },
        {
                _id: "SS3",
                metaverse: "Somnium Space",
                salesLastDay: 22605718.90,
                salesLastWeek:375554107.58
        }
]);