import AuthAPI from '../../../api/auth';
import { AuthResponse, UserInfo } from '../../../types/user';
import { AxiosResponse } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const navigate = useNavigate();
  return useMutation((userData: UserInfo) => AuthAPI.signIn(userData), {
    onSuccess: (res: AxiosResponse<AuthResponse>) => {
      const token = res.data.token;
      localStorage.setItem('token', token);
      navigate('/', { replace: true });
    },
  });
}
