const expressJwt = require('express-jwt');
const config = require('../config');

function jwt() {
  const { secret } = config;
  return expressJwt({ secret }).unless({
    path: ['/api/user/login', '/api/user/register']
  });
}

module.exports = jwt;
