const express = require('express');

const recordRouter = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weight');

// Models defined in mongoose schema
const Record = require('../_models/record');

recordRouter.post('/', (req, res) => {
  let date = req.body.date;
  let weight = req.body.weight;
  let userId = req.body.userId;
  let record = new Record({ userId: userId, date: date, weight: weight });
  Record.create(record, function(err) {
    if (err) {
      console.error(err);
      return res.status(404).end();
    } else {
      return res.status(200).end();
    }
  });
});
recordRouter.get('/', (req, res) => {
  Record.find(function(err, records) {
    if (err) {
      console.error(err);
      return res.status(404).end();
    } else {
      res.json(records);
      return res.status(200).end();
    }
  });
});

module.exports = recordRouter;
