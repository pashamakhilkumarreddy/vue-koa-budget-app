const jsonwebtoken = require('jsonwebtoken');

const {
  jwt,
} = require('../config');

const {
  ONE_WEEK,
} = require('./constants');

const signJWTUser = (payload, expiry = ONE_WEEK) => {
  if (payload) {
    return jsonwebtoken.sign(payload, jwt.JWT_SECRET, {
      expiresIn: expiry,
    });
  }
  return null;
};

module.exports = {
  signJWTUser,
};
