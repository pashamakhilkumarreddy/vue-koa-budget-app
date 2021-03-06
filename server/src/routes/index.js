const auth = require('./auth');

module.exports = ({ app }) => {
  app.use(auth.routes());
  app.use(auth.allowedMethods());
};
