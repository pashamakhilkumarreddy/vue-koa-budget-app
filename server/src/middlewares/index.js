const AuthValidation = require('./AuthValidation');
const AuthMiddleware = require('./AuthMiddleware');

module.exports = {
  ...AuthValidation,
  ...AuthMiddleware,
};
