const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/index.route');
const jwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

app.use(cors());

app.use(jwt());

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(express.json());

app.use('/api', routes);

app.use(errorHandler);

module.exports = app;
