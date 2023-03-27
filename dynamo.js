import { DynamoDB, CreateTableCommand } from "@aws-sdk/client-dynamodb";
//const uuidv4 = require("uuid/v4");
require("dotenv").config();

AWS.config.update({
  region: "us-east-1",
  accessKeyId: process.env.AWSAccessKey,
  secretAccessKeyId: process.env.AWSsecretAccessKey,
  endpoint: "http://localhost:3001",
});

new AWS.DynamoDB.DocumentClient();

async function dynamodb() {
  try {
    const results = await dbclient.send(new ListTablesCommand());
    results.Tables.forEach(function (item, index) {
      console.log(item.Name);
    });
  } catch (err) {
    console.error(err);
  }
}
module.exports = { dynamodb };
