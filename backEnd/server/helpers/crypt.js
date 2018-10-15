const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
  encode: function(plainPassword) {
    let hash = bcrypt.hashSync(plainPassword, saltRounds);
    return hash;
  },
  checkPassword: function(plainPassword, hash) {
    return bcrypt.compareSync(plainPassword, hash);
  }
};
