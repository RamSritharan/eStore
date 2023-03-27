module.exports = {
  aws_table_name: "clothesTable",
  aws_local_config: {
    region: "local",
    endpoint: "http://localhost:3001",
  },
  aws_remote_config: {
    accessKeyId: process.env.AWSAccessKey,
    secretAccessKey: process.env.AWSsecretAccessKey,
    region: "us-east-1",
  },
};
