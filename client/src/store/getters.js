export default {
  isUserLoggedIn({
    user: {
      isLoggedIn,
      token,
    },
  }) {
    return token && isLoggedIn;
  },
};
