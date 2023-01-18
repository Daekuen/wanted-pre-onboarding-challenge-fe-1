import React from 'react';
import { ChildrenProps } from '../../../types/children';

export default function HeaderWrapper({ children }: ChildrenProps) {
  return (
    <header className="max-w-4xl h-16 flex m-auto justify-between py-2 px-5 bg-green-600 text-gray-200 rounded-md">
      {children}
    </header>
  );
}
