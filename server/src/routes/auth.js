const Router = require('koa-router');
const {
  validateUserInput,
} = require('../middlewares');

const router = new Router();

const {
  login,
  register,
} = require('../controllers');

router.post('/login', validateUserInput, login);
router.post('/register', validateUserInput, register);

module.exports = router;
