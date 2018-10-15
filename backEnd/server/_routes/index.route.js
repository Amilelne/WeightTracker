const express = require('express');

const router = express.Router();

//connect through mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/weight');

const userRoute = require('./user.route');
const recordRoute = require('./record.route');

router.use('/user', userRoute);
router.use('/record', recordRoute);

module.exports = router;
