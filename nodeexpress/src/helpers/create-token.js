const {sign} = require('jsonwebtoken');

function createToken(user) {
  const token = sign({user}, process.env.SECRET_TOKEN, {
    expiresIn: '1d'
  });

  return token;
}

module.exports = {createToken};