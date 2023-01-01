import React, { useState } from 'react';

interface SignUpInProps {
  title: string;
  type: string;
}

type UserInfo = {
  email: string;
  password: string;
};

export default function SignUpIn({ title, type }: SignUpInProps) {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSignUp = () => {};
  const handleLogin = () => {};

  return (
    <div>
      <div className="flex items-center justify-center text-3xl font-medium mb-20 py-4 border-solid border border-gray-200 rounded-md">
        <p>{title}</p>
      </div>
      <div className="flex justify-center h-1/3">
        <div className="flex flex-col mr-5 text-xl font-semibold">
          <span className="mb-5 py-1 px-3">e-mail</span>
          <span className="py-1 px-3">Passowrd</span>
        </div>
        <form
          action="submit"
          className="text-black"
          onSubmit={type === 'create' ? handleSignUp : handleLogin}
        >
          <div className="mb-5">
            <input
              type="text"
              id="email"
              name="email"
              value={userInfo?.email}
              onChange={handleChange}
              className="rounded-md py-1 px-3"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              value={userInfo?.password}
              onChange={handleChange}
              className="rounded-md py-1 px-3"
            />
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
