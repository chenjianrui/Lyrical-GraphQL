const express = require('express');
const models = require('./models');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();
require('dotenv').config()
// Replace with your mongoLab URI

const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  })

  console.log(`MongoDB Connected: ${connection.connection.host}`)
}
connectDB()
app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
