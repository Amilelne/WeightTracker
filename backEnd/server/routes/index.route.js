const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weight');

// Models defined in mongoose schema
const Record = require('../models/record');
const User = require('../models/user');

router.post('/login', (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;
  User.findOne({ email: email }, function(err, doc) {
    if (err) {
      return res.status(500).end();
    } else {
      // User exists and password right
      if (doc && doc['password'] == password) {
        return res.status(200).end();
      }
      // User doesn't exist or password wrong
      return res.status(400).end();
    }
  });
});
router.post('/register', (req, res) => {
  let user = new User({
    userId: req.body.userId,
    email: req.body.email,
    password: req.body.password
  });
  User.create(user, function(err) {
    if (err) {
      console.log(err);
    }
  });
  return res.status(200).end();
});

router.post('/record', (req, res) => {
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
router.get('/record', (req, res) => {
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

module.exports = router;
