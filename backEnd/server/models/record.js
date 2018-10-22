const { conf } = require('../config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RecordSchema = new Schema({
  userId: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  weight: {
    type: Schema.Types.Decimal128,
    require: true
  }
});

const name = conf('collections.record');
module.exports = mongoose.model(name, RecordSchema, name);
