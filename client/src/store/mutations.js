export default {
  setToken(state, token) {
    state.user.token = token;
    if (token) {
      state.user.isLoggedIn = true;
    } else {
      state.user.isLoggedIn = false;
    }
  },
  setUser(state, userId) {
    state.user.userId = userId;
  },
  setAdmin(state, isAdmin) {
    state.user.isAdmin = isAdmin;
  },
};
