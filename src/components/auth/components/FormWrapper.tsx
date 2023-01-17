import React from 'react';

interface IFormWrapper {
  children: React.ReactNode;
  onLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormWrapper({ children, onLoginSubmit }: IFormWrapper) {
  return (
    <div className="flex justify-center">
      <form action="submit" className="text-black" onSubmit={onLoginSubmit}>
        {children}
      </form>
    </div>
  );
}
