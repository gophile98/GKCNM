const AWS = require('./node_modules/aws-sdk');

AWS.config.update({
  region: 'local',
  endpoint: 'http://localhost:8000',
});

const docClient = new AWS.DynamoDB.DocumentClient();

const table = 'Books';

const year = 2019;
const name = 'New Book';
const type = 'Fiction';
const author = 'Slock Homes';

const params = {
  TableName: table,
  Item: {
    name,
    year,
    type,
    author
  },
};

console.log('Adding a new book...');
docClient.put(params, (err, data) => {
  if (err) {
    console.error('Unable to add item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('Added An Item', JSON.stringify(params));
  }
});
