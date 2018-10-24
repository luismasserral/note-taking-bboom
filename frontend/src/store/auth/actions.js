import * as types from './mutation-types';
import AuthAPI from './../../api/auth';

const logout = ({ commit }) => {
  localStorage.removeItem('token');

  commit(types.LOGOUT);
};

const login = async ({ commit }, payload) => {
  try {
    const response = await AuthAPI.login(payload);

    localStorage.setItem('token', response.data.token);

    commit(types.LOGIN, response.data);
  } catch (err) {
    logout({ commit });
  }
};

export default {
  login,
  logout,
};
