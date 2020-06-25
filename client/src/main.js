import Vue from 'vue';
import VueMeta from 'vue-meta';
import {
  sync,
} from 'vuex-router-sync';
import {
  Plugin,
} from 'vue-fragment';
import {
  ValidationProvider,
  ValidationObserver,
  setInteractionMode,
} from 'vee-validate';

import App from '@/App.vue';
import store from '@/store';
import router from '@/routes';
import Loader from '@/components/globals/Loader.vue';

import './registerServiceWorker';
import './assets/styles/main.scss';
import '../node_modules/bulma/css/bulma.min.css';
import './utils/validations';

Vue.use(VueMeta);
Vue.use(Plugin);
sync(store, router);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('loader', Loader);

setInteractionMode('lazy');

Vue.prototype.$checkObjectProps = (obj = {
  test: '',
}) => Object.values(obj).every((val) => val);

Vue.prototype.$navigateTo = function (route) { // eslint-disable-line func-names
  this.$router.push(route);
};

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
