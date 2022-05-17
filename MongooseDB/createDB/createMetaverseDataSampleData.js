db = db.getSiblingDB('metaverseData')

db.createCollection('tiles')
tilesCollection = db.getCollection("tiles")
tilesCollection.remove({})

tilesCollection.insertMany([
        {
                _id: "-150,150",
                tileId: "-150,150",
                updatedAt: 1543335084,
                type: "district",
                estateId: 1186,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921686"
        },
        {
                _id: "-150,149",
                tileId: "-150,149",
                updatedAt: 1543335084,
                type: "district",
                estateId: 1186,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921685"
        },
        {
                _id: "-150,148",
                tileId: "-150,148",
                updatedAt: 1543335084,
                type: "district",
                estateId: 1186,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921684"
        },
        {
                _id: "-150,79",
                tileId: "-150,79",
                updatedAt: 1543335274,
                type: "district",
                estateId: 1183,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921615"
        },
        {
                _id: "-150,78",
                tileId: "-150,78",
                updatedAt: 1543335274,
                type: "district",
                estateId: 1183,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907802227629627499794519951392893147897921614"
        },
        {
                _id: "-91,150",
                tileId: "-91,150",
                updatedAt: 1582548358,
                type: "district",
                estateId: 1191,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907822304289275835163864290494731622222397590"
        },
        {
                _id: "-91,149",
                tileId: "-91,149",
                updatedAt: 1582548358,
                type: "district",
                estateId: 1191,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907822304289275835163864290494731622222397589"
        },
        {
                _id: "-91,148",
                tileId: "-91,148",
                updatedAt: 1582548358,
                type: "district",
                estateId: 1191,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907822304289275835163864290494731622222397588"
        },
        {
                _id: "-91,147",
                tileId: "-91,147",
                updatedAt: 1582548358,
                type: "district",
                estateId: 1191,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907822304289275835163864290494731622222397587"
        },
        {
                _id: "-91,146",
                tileId: "-91,146",
                updatedAt: 1582548358,
                type: "district",
                estateId: 1191,
                owner: "0xa65be351527ebcf8c1707d1e444dac38b41a5faf",
                tokenId: "115792089237316195423570985008687907822304289275835163864290494731622222397586"
        },
])

db.createCollection('tweets')
tweetsCollection = db.getCollection("tweets")
tweetsCollection.remove({})

tweetsCollection.insertMany([
        {
                authorID: "1146202351",
                tweetID: "1521966682847252480",
                text: "@AltcoinDailyio METAFLUENCE CITY 🔥🔥🔥\n\n$METO #METO #MATAFLUENCE #METAVERSE #METAHUT #LAND #NFT #ECOMMERCE #EVENTS #SHOPPING #INFLUENCERS #CELEBRITIES #BRANDS #AR #VR  @metafluence @keepface_global https://t.co/ShDMBp6qmZ",
                created_at: "2022-05-04T21:35:08.000Z"
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
