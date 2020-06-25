import {
  extend,
} from 'vee-validate';

import {
  nameRegex,
  usernameRegex,
  emailRegex,
  passwordRegex,
  phoneRegex,
} from './regex';

extend('required', {
  validate(val) {
    return {
      required: true,
      valid: ['', {}, null, undefined].indexOf(val) === -1,
    };
  },
  computesRequired: true,
  message: '{_field_} is required',
});

extend('name', (name) => {
  if (name && nameRegex.test(name)) return true;
  return 'Please enter a valid password';
});

extend('username', (username) => {
  if (username && usernameRegex.test(username)) return true;
  return 'Please enter a valid username';
});

extend('email', (email) => {
  if (email && emailRegex.test(email)) return true;
  return 'Please enter a valid email';
});

extend('password', (password) => {
  if (password && passwordRegex.test(password)) return true;
  return 'Please enter a valid password';
});

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max'],
  message: '{_field_} should be of atleast {min} characters and not more than {max} characters',
});

extend('phone', (phone) => {
  if (phone && phoneRegex.test(phone)) return true;
  return 'Please enter a valid phone';
});
