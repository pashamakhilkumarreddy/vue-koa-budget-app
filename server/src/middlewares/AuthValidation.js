const {
  isValidEmail,
  isValidPassword,
} = require('../utils/validations');

module.exports = {
  async validateUserInput(ctx, next) {
    try {
      const {
        email,
        password,
      } = ctx.request.body;
      if (email && password) {
        const {
          text: emailText,
          valid: validEmail,
        } = isValidEmail(email);
        const {
          text: passwordText,
          valid: validPassword,
        } = isValidPassword(password);
        if (!validEmail || !validPassword) {
          const messages = [];
          if (!validEmail) {
            messages.push(emailText);
          }
          if (!validPassword) {
            messages.push(passwordText);
          }
          ctx.response.status = 400;
          ctx.body = {
            error: true,
            status: 4,
            messages,
            statusMessages: [
              'Please check your input',
            ],
          };
          return;
        }
        return next(); // eslint-disable-line consistent-return
      }
      ctx.response.status = 400;
      ctx.body = {
        error: true,
        status: 4,
        messages: [
          'Email and Password are required',
        ],
        statusMessages: [
          'Please check your input',
        ],
      };
      return;
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
