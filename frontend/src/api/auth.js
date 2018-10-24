import axios from './../setup/axios';

const login = params => axios.post('/auth/login', params);

export default {
  login,
};
