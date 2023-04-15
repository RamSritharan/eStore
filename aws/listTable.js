const {
  DynamoDBClient,
  ListTablesCommand,
} = require("@aws-sdk/client-dynamodb");

async function listMain() {
  const client = new DynamoDBClient({ region: "us-east-1" });
  const command = new ListTablesCommand({});
  try {
    const results = await client.send(command);
    console.log(results.TableNames.join("\n"));
  } catch (err) {
    console.error("hellofrfer", err);
  }
}

module.exports = { listMain };
