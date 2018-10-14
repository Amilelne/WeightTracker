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

module.exports = mongoose.model('Record', RecordSchema);
