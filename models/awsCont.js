require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const {
  DynamoDBClient,
  ListTablesCommand,
  BatchGetItemCommand,
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

let mappedItems;

async function productItem(req, res) {
  const client = new DynamoDBClient({ region: "us-east-1" });
  try {
    const data = await client.send(new BatchGetItemCommand(params));
    const dataJSON = data.Responses.Products;
    console.log("Success, items retrieved", dataJSON);
    mappedItems = dataJSON;
    res.status(200).json(dataJSON);
  } catch (err) {
    console.log("Error", err);
  }
}

//Post cart into orders made
const storeItems = mappedItems;

async function productPost(req, res) {
  try {
    console.log(req.body);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.Product_Id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.Product_title,
            },
            unit_amount: storeItem.product_cents,
          },
          quantity: item.quantity,
        };
      }),
    });
    res.status({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

module.exports = { listMain, productItem, productPost, mappedItems };
