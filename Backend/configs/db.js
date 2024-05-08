const { MongoClient } = require("mongodb");
 require('dotenv').config({path: './configs/.env'});
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.URI;
// Connect to your Atlas cluster
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
module.exports ={
    run
}