/*
  eslint-disable consistent-return
 */

const jsonwebtoken = require('jsonwebtoken');
const {
  jwt,
} = require('../config');
const {
  whiteListedRoutes,
} = require('../utils/constants');

module.exports = {
  isAuthenticated(ctx, next) {
    try {
      if (!whiteListedRoutes.includes(ctx.originalUrl)) {
        return next();
      }
      const authHeader = ctx.request.header.authorization;
      if (!authHeader) {
        ctx.response.status = 401;
        ctx.body = {
          error: true,
          status: 401,
          statusMessage: [
            'You need a token to access this resource',
          ],
        };
        return;
      }
      const token = authHeader.split(' ')[1];
      const decodedToken = jsonwebtoken.verify(token, jwt.JWT_SECRET);
      if (!decodedToken) {
        ctx.response.status = 403;
        ctx.body = {
          error: true,
          status: 403,
          statusMessage: [
            'You need a valid token to access this resource',
          ],
        };
        return;
      }
      ctx.request.token = token;
      ctx.request.isLoggedIn = true;
      ctx.request.isAdmin = decodedToken.isAdmin;
      ctx.request.userId = decodedToken.userId;
      return next();
    } catch (err) {
      console.error(err);
      ctx.response.status = 500;
      ctx.body = {
        error: true,
        status: 500,
        statusMessage: [
          'Internal server error',
        ],
      };
    }
  },
};
