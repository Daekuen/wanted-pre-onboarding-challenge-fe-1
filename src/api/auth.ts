import { UserInfo } from '../types/user';
import api from './customAxios';

export const AuthAPI = {
  signUp: (userData: UserInfo) => {
    return api.post('/users/create', userData);
  },

  signIn: (userData: UserInfo) => {
    return api.post('/user/login', userData);
  },
};
