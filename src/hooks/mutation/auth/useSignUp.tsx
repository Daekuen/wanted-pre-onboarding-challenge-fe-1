import AuthAPI from '../../../api/auth';
import { AuthResponse, UserInfo } from '../../../types/user';
import { AxiosResponse } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useSignUp() {
  const navigate = useNavigate();
  return useMutation((userData: UserInfo) => AuthAPI.signUp(userData), {
    onSuccess: (res: AxiosResponse<AuthResponse>) => {
      const token = res.data.token;
      localStorage.setItem('token', token);
      navigate('/auth/login', { replace: true });
    },
  });
}
