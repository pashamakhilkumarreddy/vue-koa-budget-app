export default {
  setToken({
    commit,
  }, token) {
    commit('setToken', token);
  },
  setUser({
    commit,
  }, userId) {
    commit('setUser', userId);
  },
  setAdmin({
    commit,
  }, isAdmin) {
    commit('setAdmin', isAdmin);
  },
};
