const {
  DynamoDBClient,
  ListTablesCommand,
  BatchGetItemCommand,
  UpdateItemCommand,
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
      ProjectionExpression:
        "Product_Id, Product_title, Product_description, Product_picture, Product_price",
      ConsistentRead: true || false,
    },
  },
  ReturnConsumedCapacity: "INDEXES" || "TOTAL" || "NONE",
};

async function productItem(req, res) {
  const client = new DynamoDBClient({ region: "us-east-1" });
  try {
    const data = await client.send(new BatchGetItemCommand(params));
    const dataJSON = data.Responses.Products;
    console.log("Success, items retrieved", dataJSON);
    res.status(200).json(dataJSON);
  } catch (err) {
    console.log("Error", err);
  }
}

//model in the server side, //transform it into a cart item object

// const putItem = async () => {
//   export const params = {
//     TableName:
//   }
// }

// const updateParams = {
//   TableName: "Products",
//   Key: {
//     PRIMARY_KEY: "Product_Id",
//     SORT_KEY: "Quantity",
//   },
//   ProjectionExpression: "#p",
//   ExpressionAttributeNames: { "#p": "Product_price" },
//   UpdateExpression: "set info.#p = :p",
//   ExpressionAttributeValues: {
//     ":p": "25.50",
//   },
// };

// // const updateItem = async (req, res) => {
// //   const client = new DynamoDBClient({ region: "us-east-1" });
// //   try {
// //     const data = await client.send(new UpdateItemCommand(updateParams));
// //     const dataJSON = data;
// //     console.log("success items updated", dataJSON);
// //     res.status(200).json(dataJSON);
// //   } catch (err) {
// //     console.log("Error", err);
// //   }
// // };

module.exports = { listMain, productItem };
