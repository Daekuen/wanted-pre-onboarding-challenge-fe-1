import React from 'react';

interface IFormWrapper {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormWrapper({ children, onSubmit }: IFormWrapper) {
  return (
    <div className="flex justify-center">
      <form action="submit" className="text-black" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
}
