import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  plugins: [
    createPersistedState(),
  ],
  state: {
    user: {
      loggedIn: false,
      token: null,
      isAdmin: false,
    },
  },
  actions,
  getters,
  mutations,
});
