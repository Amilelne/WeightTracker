const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/index.route');

app.use(cors());

app.use(
  express.urlencoded({
    extended: true
  })
);

app.use('/api', routes);

module.exports = app;
