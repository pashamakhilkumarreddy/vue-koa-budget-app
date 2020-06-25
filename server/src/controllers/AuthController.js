const _ = require('lodash');

const {
  User,
} = require('../models');

const {
  generateUsername,
} = require('../utils/helpers');

module.exports = {
  async register(ctx) {
    try {
      const {
        email,
        password,
      } = ctx.request.body;
      const doesUserExist = await User.findOne({
        email,
      });
      if (!doesUserExist) {
        const username = generateUsername();
        const user = new User({
          email,
          password,
          username,
        });
        await user.save();
        const formattedUser = Object.freeze(_.pick(user, ['username', 'email']));
        ctx.response.status = 201;
        ctx.body = {
          error: false,
          status: 201,
          data: {
            formattedUser,
          },
          statusMessages: [
            'Successfully created a new User',
          ],
        };
        return;
      }
      ctx.response.status = 403;
      ctx.body = {
        error: true,
        status: 403,
        messages: [
          'A user already exists with the given email id!!',
        ],
        statusMessages: [
          'Unable to create a new User',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        error: true,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
  async login(ctx) {
    try {
      const {
        email,
        password,
      } = ctx.request.body;
      const user = await User.findOne({
        email,
      });
      if (!user) {
        ctx.response.status = 403;
        ctx.body = {
          error: true,
          status: 200,
          statusMessages: [
            'A user with the provided email doesn\'t exist in our records',
          ],
        };
        return;
      }
      const isAuthenticated = await user.comparePassword(password);
      if (!isAuthenticated) {
        ctx.response.status = 401;
        ctx.body = {
          error: true,
          status: 401,
          statusMessages: [
            'Login unsuccessfull, please check your password!',
          ],
        };
        return;
      }
      const token = await user.createToken();
      const {
        _id: userId,
        isAdmin,
      } = user; // eslint-disable-line no-underscore-dangle
      ctx.response.status = 200;
      ctx.body = {
        error: false,
        status: 200,
        data: {
          token,
          userId,
          isAdmin,
        },
        statusMessages: [
          'Login successfull',
        ],
      };
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        error: true,
        status: 500,
        statusMessages: [
          'Internal server error',
        ],
      };
    }
  },
};
