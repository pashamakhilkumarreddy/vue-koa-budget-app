<template>
  <form-layout #form-content>
    <form class="form" autocomplete="off">
      <h1 class="title has-text-centered">Register</h1>
      <div class="field">
        <label for="register-email" class="label">Email</label>
        <div class="control">
          <input type="email" id="register-email" name="registerEmail" class="input"
            v-model="register.email" placeholder="Please enter your email" required />
        </div>
      </div>
      <div class="field">
        <label for="register-password" class="label">Password</label>
        <div class="control">
          <input type="password" id="register-password" name="registerPassword" class="input"
            v-model="register.password" placeholder="Please enter your password" required />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" v-model="register.isTermsChecked" />
            I agree to the <a href="/terms-and-conditions" target="_blank">terms and conditions</a>
          </label>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-info">Register</button>
        </div>
        <div class="control flex-center">
          <p class="aside-content">Already with us?</p>&nbsp;&nbsp;
          <button class="button is-info is-light">Login</button>
        </div>
      </div>
    </form>
  </form-layout>
</template>
<script>
import FormLayout from '@/components/FormLayout.vue';

export default {
  name: 'Register',
  metaInfo: {
    title: 'Register',
  },
  components: {
    FormLayout,
  },
  data() {
    return {
      register: {
        email: '',
        password: '',
        isTermsChecked: true,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>
