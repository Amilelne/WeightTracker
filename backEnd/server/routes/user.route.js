const express = require('express');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config');
const crypt = require('../_helpers/crypt');

// Models defined in mongoose schema
const User = require('../_models/user');

userRouter.post('/login', (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;
  User.findOne({ email: email }, function(err, doc) {
    if (err) {
      return res.status(500).end();
    } else {
      // User exists and password right
      if (doc && crypt.checkPassword(password, doc['password'])) {
        const token = jwt.sign({ sub: doc['userId'] }, config.secret);
        return res.status(200).json(token);
      }
      // User doesn't exist or password wrong
      return res.status(400).end();
    }
  });
});
userRouter.post('/register', (req, res) => {
  let password = crypt.encode(req.body.password);
  let user = new User({
    userId: req.body.userId,
    email: req.body.email,
    password: password
  });
  User.create(user, function(err) {
    if (err) {
      console.log(err);
    }
  });
  return res.status(200).end();
});

module.exports = userRouter;
