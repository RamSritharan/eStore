const {
  DynamoDBClient,
  ListTablesCommand,
  BatchGetItemCommand,
  UpdateItemCommand,
  PutItemCommand,
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

//Post cart into orders made
let orderNumber = 0;
const date = new Date();

async function productPost(req, res) {
  try {
    const item = req.body;
    console.log(req);
    console.log(req.body);

    // const parsedItem = JSON.parse(item);
    // console.log("Retrieved:", parsedItem);
    res.status(200).json("created");
  } catch (e) {
    console.error(e);
  }
}

//   try{
//     const data = new PutItemCommand({
//       TableName: "Orders",
//       Item: {
//         OrderNo: orderNumber++,
//         order_date: date,
//         order_items: req.body.products.map(e => {
//           e.product
//         })
//         order_total:

//       }
//     })
//   }
// }

module.exports = { listMain, productItem, productPost };
