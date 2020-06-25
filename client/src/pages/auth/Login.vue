<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form-layout #form-content>
      <form class="form"  @submit.prevent="handleSubmit(login)" autocomplete="off">
        <h1 class="title has-text-centered">Login</h1>
        <div class="field">
          <label for="login-email" class="label">Email</label>
          <div class="control">
            <ValidationProvider name="Email" rules="required|email|minmax:6,90" :bails="true"
              v-slot="{ errors }">
              <input type="email" id="login-email" name="loginEmail" class="input"
                v-model="user.email" placeholder="Please enter your email" required
                autocomplete="new-password" />
              <template v-for="(error, i) of errors">
                <p class="has-text-danger" :key="i">{{ error }}</p>
              </template>
            </ValidationProvider>
          </div>
        </div>
        <div class="field">
          <label for="login-password" class="label">Password</label>
          <div class="control">
            <ValidationProvider name="Password" rules="required|password|minmax:8,30" :bails="true"
              v-slot="{ errors }">
              <input type="password" id="login-password" name="loginPassword" class="input"
                v-model="user.password" placeholder="Please enter your password" required
                autocomplete="new-password" />
              <template v-for="(error, i) of errors">
                <p class="has-text-danger" :key="i">{{ error }}</p>
              </template>
            </ValidationProvider>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" v-model="user.rememberMe" />
              Remember Me
            </label>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-info">Login</button>
          </div>
          <div class="control flex-center">
            <p class="aside-content">Not with us yet?</p>&nbsp;&nbsp;
            <button type="button" class="button is-info is-light"
            @click.prevent="$navigateTo({ name: 'register' })">
              Register
            </button>
          </div>
        </div>
      </form>
    </form-layout>
  </ValidationObserver>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

import FormLayout from '@/components/FormLayout.vue';
import Api from '@/services/AuthenticationService';

export default {
  name: 'Login',
  metaInfo: {
    title: 'Login',
  },
  components: {
    FormLayout,
  },
  data() {
    return {
      user: {
        email: '',
        password: '',
        rememberMe: true,
      },
    };
  },
  computed: {
    ...mapActions([
      'setToken',
      'setUser',
    ]),
    ...mapGetters([
      'isUserLoggedIn',
    ]),
  },
  methods: {
    async login() {
      try {
        const { email, password } = this.user;
        const payload = {
          email,
          password,
        };
        if (this.$checkObjectProps(payload)) {
          const result = await Api.login(payload);
          const { error } = result.data;
          if (!error && result.status) {
            const { token, userId, isAdmin } = result.data.data;
            this.$store.commit('setToken', token);
            this.$store.commit('setUser', userId);
            this.$store.commit('setAdmin', isAdmin);
          }
          if (this.isUserLoggedIn) {
            this.$navigateTo({
              name: 'budget-and-expenses',
            });
          }
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
