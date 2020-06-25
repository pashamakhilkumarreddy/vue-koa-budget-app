import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/pages/Home.vue';
import Login from '@/pages/auth/Login.vue';
import Register from '@/pages/auth/Register.vue';
import BudgetAndExpense from '@/pages/BudgetAndExpense.vue';
import Profile from '@/pages/Profile.vue';
import NotFound from '@/components/errors/NotFound.vue';
import TermsAndConditions from '@/components/TermsAndConditions.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
  },
  {
    path: '/register',
    component: Register,
    name: 'register',
  },
  {
    path: '/budget-and-expenses',
    component: BudgetAndExpense,
    name: 'budget-and-expenses',
  },
  {
    path: '/profile',
    component: Profile,
    name: 'profile',
  },
  {
    path: '/terms-and-conditions',
    component: TermsAndConditions,
    name: 'terms-and-condition',
  },
  {
    path: '/home',
    redirect: {
      name: 'home',
    },
  }, {
    path: '*',
    component: NotFound,
  },
  ],
});
