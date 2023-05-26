require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const date = Date();

const {
  DynamoDBClient,
  ListTablesCommand,
  BatchGetItemCommand,
  PutItemCommand,
  ScanCommand,
} = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({ region: "us-east-1" });

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
        "Product_Id, Product_title, Product_description, Product_picture, Product_price, Product_cents",
      ConsistentRead: true || false,
    },
  },
  ReturnConsumedCapacity: "INDEXES" || "TOTAL" || "NONE",
};

let mappedItems = [];

async function productItem(req, res) {
  try {
    const data = await client.send(new BatchGetItemCommand(params));
    const dataJSON = data.Responses.Products;
    res.status(200).json(dataJSON);
  } catch (err) {
    console.log("Error", err);
  }
}

//Post cart into orders made3

async function productPost(req, res) {
  const data = await client.send(new BatchGetItemCommand(params));
  const dataJSON = data.Responses.Products;
  let mappedItems = [];
  mappedItems.push(dataJSON);

  const storeItems = new Map([
    ["T-shirt", { priceInCents: 10000, name: "T-Shirt" }],
    ["Shorts", { priceInCents: 20000, name: "Learn CSS Today" }],
    ["Sweater", { priceInCents: 20000, name: "Learn CSS Today" }],
  ]);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.map((item) => {
        const storeItem = storeItems.get(item.product);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.product,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000",
    });
    res.json({ url: session.url });
    postOrders(req);
  } catch (err) {
    console.log("Error", err);
  }
}

let OrderId = 0;

async function postOrders(req, res) {
  const mappedOrders = { products: [], totalAmount: 0, date: "" };

  req.body.forEach((c) => {
    mappedOrders.products.push(c.product);
    mappedOrders.totalAmount += c.price;
    mappedOrders.date = date;
    OrderId += 1;
  });

  var postParams = {
    TableName: "Orders",
    Item: {
      OrderId: { N: `${OrderId}` },
      Products: { S: `${mappedOrders.products}` },
      Total: { S: `${mappedOrders.totalAmount}` },
      Date: { S: `${mappedOrders.date}` },
    },
  };

  try {
    const data = await client.send(new PutItemCommand(postParams));
    console.log("Success - Posted on Amazon DB", data);
  } catch (err) {
    console.log("Error", err);
  }
}

const scanParams = {
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
        "Product_Id, Product_title, Product_description, Product_picture, Product_price, Product_cents",
      ConsistentRead: true || false,
    },
  },
  ReturnConsumedCapacity: "INDEXES" || "TOTAL" || "NONE",
};

async function getAllOrders(req, res) {
  const command = new ScanCommand({
    ProjectionExpression: "OrderId, Products",
    TableName: "Orders",
  });
  try {
    const data = await client.send(command);
    dataJSON = data.Items;
    console.log("Scanned items", dataJSON);
  } catch (err) {
    console.log("Error", err);
  }
}

module.exports = { listMain, productItem, productPost, getAllOrders };
