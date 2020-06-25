/*
  eslint-disable no-useless-escape
 */
const nameRegex = /^[a-zA-Z]{3,30}$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
const usernameRegex = /[A-za-z]{6,30}/;
const mobileNumberRegex = /[0-9]{10}/;

const isValidEmail = (email = '') => {
  if (!email) return false;
  return {
    text: 'Please enter a valid email',
    valid: emailRegex.test(email.trim()),
  };
};

const isValidPassword = (password = '') => {
  if (!password) return false;
  return {
    text: 'Please enter a valid password',
    valid: passwordRegex.test(password.trim()),
  };
};

const isValidName = (name = '') => {
  if (!name) return false;
  return {
    text: 'Please enter a valid name',
    valid: nameRegex.test(name.trim()),
  };
};

const isValidUsername = (username = '') => {
  if (!username) return false;
  return {
    text: 'Please enter a valid username',
    valid: usernameRegex.test(username.trim()),
  };
};

const isValidMobileNumber = (number = '') => {
  if (!number) return false;
  return {
    text: 'Please enter a valid number',
    valid: mobileNumberRegex.test(number.trim()),
  };
};

module.exports = {
  isValidName,
  isValidEmail,
  isValidUsername,
  isValidMobileNumber,
  isValidPassword,
};
