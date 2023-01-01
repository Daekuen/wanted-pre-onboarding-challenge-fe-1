import { AxiosError } from 'axios';
import React, { useState } from 'react';
import api from '../api/customAxios';
import { useNavigate } from 'react-router-dom';

interface SignUpInProps {
  title: string;
  type: string;
}

type UserInfo = {
  email: string;
  password: string;
};

export default function SignUpIn({ title, type }: SignUpInProps) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !userInfo.email ||
      !userInfo.password ||
      !checkEmail(userInfo.email) ||
      userInfo.password.length < 8
    )
      return;

    try {
      await api.post('/users/create', userInfo);
      setUserInfo({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userInfo.email || !userInfo.password) return;

    try {
      const login = await api.post('/users/login', userInfo);
      localStorage.setItem('token', login.data.token);
      setUserInfo({ email: '', password: '' });
      navigate('/');
    } catch (error) {
      alert('아이디와 비밀번호를 다시 확인해 주세요.');
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center text-3xl font-medium mb-20 py-4 border-solid border border-gray-200 rounded-md">
        <p>{title}</p>
      </div>
      <div className="flex justify-center h-1/3">
        <form
          action="submit"
          className="text-black"
          onSubmit={type === 'create' ? handleSignUp : handleLogin}
        >
          <div className="flex flex-col mb-10 items-center justify-center">
            <div className="flex">
              <label
                htmlFor="email"
                className="block text-gray-200 font-bold text-left text-lg mr-14"
              >
                email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={userInfo?.email}
                onChange={handleChange}
                className="rounded-md py-1 px-3 w-full"
              />
            </div>
            <div className="flex w-full text-right justify-end">
              {type === 'create' &&
                userInfo.email &&
                !checkEmail(userInfo.email) && (
                  <p className="text-red-500 w-full mt-1 font-medium">
                    e-mail 형식이 아닙니다.
                  </p>
                )}
            </div>
          </div>

          <div className="flex flex-col mb-10 items-center justify-center">
            <div className="flex">
              <label
                htmlFor="email"
                className="block text-gray-200 font-bold text-left text-lg mr-5"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={userInfo?.password}
                onChange={handleChange}
                className="rounded-md py-1 px-3"
              />
            </div>
            <div className="flex w-full text-right justify-end">
              {type === 'create' &&
                userInfo.password &&
                userInfo.password.length < 8 && (
                  <p className="text-red-500 w-full mt-1 font-medium">
                    비밀번호는 최소 8자 이상입니다.
                  </p>
                )}
            </div>
          </div>

          <div className="mt-5 flex items-end justify-end">
            <button
              type="submit"
              className="text-lg font-semibold py-1 px-2 text-green-600 bg-gray-200 rounded-lg"
            >
              {title}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// email check
function checkEmail(str: string) {
  const EmailPattern =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return EmailPattern.test(str);
}
