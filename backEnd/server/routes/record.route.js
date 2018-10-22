const express = require('express');

const recordRouter = express.Router();

// Models defined in mongoose schema
const Record = require('../models/record');

recordRouter.post('/', (req, res) => {
  const { date, weight, userId } = req.body;
  let record = new Record({ userId, date, weight });
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
