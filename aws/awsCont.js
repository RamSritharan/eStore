const {
  DynamoDBClient,
  ListTablesCommand,
  BatchGetItemCommand,
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

const params = {
  RequestItems: {
    Products: {
      Keys: [
        {
          Product_Id: {
            N: "10001",
          },
          Quantity: {
            N: "5",
          },
        },
        {
          Product_Id: {
            N: "20002",
          },
          Quantity: {
            N: "5",
          },
        },
        {
          Product_Id: {
            N: "30003",
          },
          Quantity: {
            N: "5",
          },
        },
      ],
      ProjectionExpression: "Product_Id, Product_title, Product_description",
      ConsistentRead: true || false,
    },
  },
  ReturnConsumedCapacity: "INDEXES" || "TOTAL" || "NONE",
};

async function productItem() {
  const client = new DynamoDBClient({ region: "us-east-1" });
  try {
    const data = await client.send(new BatchGetItemCommand(params));
    const dataJSON = data.Responses.Products;
    const theProduct = dataJSON.map((i) => i.Product_title);
    console.log("Success, items retrieved", theProduct);
    return theProduct;
  } catch (err) {
    console.log("Error", err);
  }
}

module.exports = { listMain, productItem };
