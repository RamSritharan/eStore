// module.exports = {
//   aws_table_name: "clothesTable",
//   aws_local_config: {
//     region: "local",
//     endpoint: "http://localhost:3001",
//   },
//   aws_remote_config: {
//     accessKeyId: process.env.AWSAccessKey,
//     secretAccessKey: process.env.AWSsecretAccessKey,
//     region: "us-east-1",
//   },
// };
import "react-native-get-random-values";
import "react-native-url-polyfill/auto";
import { DynamoDB } from "@aws-sdk/client-dynamodb";

const {
  DynamoDBClient,
  DynamoDB,
  ListTablesCommand,
} = require("@aws-sdk/client-dynamodb");

(async () => {
  const client = new DynamoDBClient({ region: "us-east-1" });
  const command = new ListTablesCommand({});
  try {
    const results = await client.send(command);
    console.log(results.TableNames.join("\n"));
  } catch (err) {
    console.error(err);
  }
})();

const client = new DynamoDB({ region: "us-east-1" });
client.middlewareStack.add(
  (next, context) => (args) => {
    args.request.headers["Custom-Header"] = "value";
    console.log("\n -- printed from inside middleware -- \n");
    return next(args);
  },
  {
    step: "build",
  }
);
await client.listTables({});

module.exports = { client, command };