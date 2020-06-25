const {
  randomBytes,
} = require('crypto');

const genSalt = (bytes = 16) => randomBytes(bytes).toString('hex');

const checkObjectProps = (obj = {
  test: '',
}) => Object.values(obj).every((ele) => ele);

const generateUsername = (len = 30) => (Math.random().toString(36).slice(2)
  + genSalt(16)
  + new Date().getTime()).slice(0, len);

module.exports = {
  checkObjectProps,
  genSalt,
  generateUsername,
};
