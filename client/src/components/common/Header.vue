<template>
  <header class="header">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a href="/" class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>

        <span role="button" :class="['navbar-burger', 'burger', { 'is-active': showMobileNavbar }]"
        aria-label="menu" aria-expanded="false" data-target="main-navbar"
        @click="showMobileNavbar = !showMobileNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>

      <div id="main-navbar" :class="['navbar-menu', { 'is-active': showMobileNavbar }]">
        <div class="navbar-start"></div>
        <div class="navbar-end">
          <router-link to="/login" class="navbar-item" v-if="isUserLoggedIn">
            <span>
              Budget &amp; Expenses
            </span>
          </router-link>
          <router-link to="/login" class="navbar-item" v-if="isUserLoggedIn">
            <span>
              Profile
            </span>
          </router-link>
          <router-link to="/login" class="navbar-item" v-if="!isUserLoggedIn">
            <span class="button is-info">
              Login
            </span>
          </router-link>
          <router-link to="/register" class="navbar-item" v-if="isUserLoggedIn">
            <span class="button is-danger is-light">
              Log Out
            </span>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      showMobileNavbar: false,
    };
  },
  computed: {
    ...mapGetters([
      'isUserLoggedIn',
    ]),
  },
};
</script>
<style lang="scss" scoped>
.header {
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.6);
}

.navbar-item {
  font-size: 1.1rem;
}
</style>
