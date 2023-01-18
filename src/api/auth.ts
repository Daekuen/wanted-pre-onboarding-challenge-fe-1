import { UserInfo } from '../types/user';
import api from './customAxios';

const AuthAPI = {
  signUp: (userData: UserInfo) => {
    return api.post('/users/create', userData);
  },

  signIn: (userData: UserInfo) => {
    return api.post('/users/login', userData);
  },
};

export default AuthAPI;
