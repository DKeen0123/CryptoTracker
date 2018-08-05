const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const keys = require('./keys.js')

const app = express();

mongoose.connect(`mongodb://${keys.DB_USER}:${keys.DB_PASSWORD}@ds113482.mlab.com:13482/crypto-tracker-dev`)
mongoose.connection.once('open', () => {
  console.log('connected to db');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening to port 4000')
});
