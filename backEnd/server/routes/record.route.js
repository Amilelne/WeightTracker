const express = require('express');

const recordRouter = express.Router();

const { asyncHandler, json, auth } = require('../middlewares');
const url = require('url');
// Models defined in mongoose schema
const Record = require('../models/record');

recordRouter.post('/record', json(), auth(), asyncHandler(addRecord));

recordRouter.get('/record', json(), auth(), asyncHandler(getRecord));

async function addRecord(req, res) {
  const input = req.body;

  let record = await new Record(input).save();
  res.json(record);
}

async function getRecord(req, res) {
  let urlParams = url.parse(req.url, true);
  let query = urlParams.query;
  let userId = query.userId;
  let records = await Record.find({ userId: userId });
  res.json(records);
}

module.exports = recordRouter;
