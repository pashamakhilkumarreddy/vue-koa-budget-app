export default {
  isUserLoggedIn({
    loggedIn,
    token,
  }) {
    return loggedIn && token;
  },
};
