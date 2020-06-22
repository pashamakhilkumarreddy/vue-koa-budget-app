<template>
  <form-layout #form-content>
    <form class="form" autocomplete="off">
      <h1 class="title has-text-centered">Login</h1>
      <div class="field">
        <label for="login-email" class="label">Email</label>
        <div class="control">
          <input type="email" id="login-email" name="loginEmail" class="input"
            v-model="login.email" placeholder="Please enter your email" required />
        </div>
      </div>
      <div class="field">
        <label for="login-password" class="label">Password</label>
        <div class="control">
          <input type="password" id="login-password" name="loginPassword" class="input"
            v-model="login.password" placeholder="Please enter your password" required />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" v-model="login.rememberMe"/>
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
          <button class="button is-info is-light">Register</button>
        </div>
      </div>
    </form>
  </form-layout>
</template>
<script>
import FormLayout from '@/components/FormLayout.vue';

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
      login: {
        email: '',
        password: '',
        rememberMe: true,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
