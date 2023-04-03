import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
