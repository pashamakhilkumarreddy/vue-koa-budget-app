import axios from 'axios';
import store from '@/store';

import config from '../config';

export default () => axios.create({
  baseURL: config.baseURL,
  headers: {
    Authorization: `Bearer ${store.state.user.token}`,
  },
});
