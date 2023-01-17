import React, { useEffect, useState } from 'react';
import useLogin from '../../hooks/mutation/auth/useLogin';
import { UserInfo } from '../../types/user';
import LoginView from './view/LoginView';

export default function Login() {
  const { mutate: loginMutate } = useLogin();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: '',
  });
  const isNotEnterEmail = userInfo.email.length === 0;
  const isNotEnterPassword = userInfo.password.length === 0;

  const loginProps = {
    userInfo,
    onUserInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUserInfo({ ...userInfo, [name]: value });
    },
    onLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      loginMutate(userInfo);
    },
    isNotEnterEmail,
    isNotEnterPassword,
  };

  console.log(userInfo);
  return <LoginView {...loginProps} />;
}
