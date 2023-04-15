// Import required AWS SDK clients and commands for Node.js
const {
  CreateTableCommand,
  DynamoDBClient,
} = require("@aws-sdk/client-dynamodb");

// Set the parameters
const params = {
  AttributeDefinitions: [
    {
      AttributeName: "Product_Id", //ATTRIBUTE_NAME_2
      AttributeType: "N", //ATTRIBUTE_TYPE
    },
    {
      AttributeName: "Quantity", //ATTRIBUTE_NAME_2
      AttributeType: "N", //ATTRIBUTE_TYPE
    },
  ],
  KeySchema: [
    {
      AttributeName: "Product_Id",
      KeyType: "HASH",
    },
    {
      AttributeName: "Quantity",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  TableName: "Products", //TABLE_NAME
  StreamSpecification: {
    StreamEnabled: false,
  },
};

const run = async () => {
  const client = new DynamoDBClient({ region: "us-east-1" });
  try {
    const data = await client.send(new CreateTableCommand(params));
    console.log("Table Created", data);
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};

// run();

// module.exports = { run };
