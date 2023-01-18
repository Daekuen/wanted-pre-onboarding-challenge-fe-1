import React, { useState } from 'react';
import LoginView from './view/LoginView';
import useLogin from '../../hooks/mutation/auth/useLogin';
import { UserInfo } from '../../types/user';
import { emailValidate, passwordValidate } from '../../utils/validate';

export default function Login() {
  const { mutate: loginMutate } = useLogin();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: '',
  });
  const isNotEnterEmail = userInfo.email.length === 0;
  const isNotEnterPassword = userInfo.password.length === 0;
  const isEmailValidate = emailValidate(userInfo.email);
  const isPasswordValidate = passwordValidate(userInfo.password);

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
    isEmailValidate,
    isPasswordValidate,
  };

  return <LoginView {...loginProps} />;
}
