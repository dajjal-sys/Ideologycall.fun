const bcrypt = require('bcrypt');
const User = require("../models/User");
const saltRounds = 10;


const comparePassword = (password, hash) => {
    return bcrypt.compareSync(password, hash);
}
hashPassword = (password) => {
  return bcrypt.hashSync(password, saltRounds);
}
module.exports = {
  hashPassword,
    comparePassword,
    
  };