import * as types from './mutation-types';

export default {
  [types.LOGIN]: (state, payload) => {
    state.isLoggedIn = true;
    state.token = payload.token;
  },
  [types.LOGOUT]: (state) => {
    state.isLoggedIn = false;
    state.token = null;
  },
};
