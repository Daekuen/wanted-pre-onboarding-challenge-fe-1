import React, { useState } from 'react';
import SubmitBtn from '../../SubmitBtn';
import { UserInfo } from '../../../types/user';
import useLogin from '../../../hooks/mutation/auth/useLogin';
import TextInput from '../../common/TextInput';
import AuthTitle from '../AuthTitle';

export default function LoginView() {
  const { mutate: loginMutate } = useLogin();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: '',
  });

  const onUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div>
      <AuthTitle title="LOGIN" />
      <div className="flex justify-center">
        <form
          action="submit"
          className="text-black"
          onSubmit={(e) => {
            e.preventDefault();
            loginMutate(userInfo);
          }}
        >
          {/* email */}
          <TextInput
            type="text"
            category="email"
            value={userInfo.email}
            onUserInfoChange={onUserInfoChange}
          />
          {/* password */}
          <TextInput
            type="password"
            category="password"
            value={userInfo.password}
            onUserInfoChange={onUserInfoChange}
          />
          {/* submit btn */}
          <SubmitBtn title="LOGIN" />
        </form>
      </div>
    </div>
  );
}
