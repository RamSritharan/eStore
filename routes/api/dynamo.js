const AWS = require("aws-sdk")

const AWS = require('aws-sdk');
const config = require('../../../config/config.js');
const isDev = process.env.NODE_ENV !== 'production';
module.exports = (app) => {
  // Gets all fruits
  app.get('/api/fruits', (req, res, next) => {
    if (isDev) {
      AWS.config.update(config.aws_local_config);
    } else {
      AWS.config.update(config.aws_remote_config);
    }
    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      TableName: config.aws_table_name
    };
    docClient.scan(params, function(err, data) {
      if (err) {
        res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else {
        const { Items } = data;
        res.send({
          success: true,
          message: 'Loaded fruits',
          fruits: Items
        });
      }
    });
  }); // end of app.get(/api/fruits)