const express = require('express');

const router = express.Router();

const userRoute = require('./user.route');
const recordRoute = require('./record.route');

router.use('/user', userRoute);
router.use('/record', recordRoute);

module.exports = router;
