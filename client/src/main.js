import Vue from 'vue';
import VueMeta from 'vue-meta';
import { sync } from 'vuex-router-sync';
import { Plugin } from 'vue-fragment';

import App from '@/App.vue';
import store from '@/store';
import router from '@/routes';

import './registerServiceWorker';
import '../node_modules/bulma/css/bulma.min.css';

Vue.use(VueMeta);
Vue.use(Plugin);
sync(store, router);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
