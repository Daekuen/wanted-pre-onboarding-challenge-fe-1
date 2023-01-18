import React, { useState } from 'react';
import SignUpView from './view/SignUpView';
import useSignUp from '../../hooks/mutation/auth/useSignUp';
import { UserInfo } from '../../types/user';
import { emailValidate, passwordValidate } from '../../utils/validate';

export default function SignUp() {
  const { mutate: signUpMutate } = useSignUp();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: '',
  });

  const isNotEnterEmail = userInfo.email.length === 0;
  const isNotEnterPassword = userInfo.password.length === 0;
  const isEmailValidate = emailValidate(userInfo.email);
  const isPasswordValidate = passwordValidate(userInfo.password);

  const signUpProps = {
    userInfo,
    onUserInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUserInfo({ ...userInfo, [name]: value });
    },
    onSignUpSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      signUpMutate(userInfo);
    },
    isNotEnterEmail,
    isNotEnterPassword,
    isEmailValidate,
    isPasswordValidate,
  };
  return <SignUpView {...signUpProps} />;
}
