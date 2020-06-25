import Api from './Api';

import {
  login as loginUrl,
  register as registerUrl,
} from '../utils/urls';

export default {
  login({
    email,
    password,
  }) {
    return Api().post(loginUrl, {
      email,
      password,
    });
  },
  register({
    email,
    password,
  }) {
    return Api().post(registerUrl, {
      email,
      password,
    });
  },
};
