import React from 'react';

export default function AuthTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center text-3xl font-medium mb-20 py-4 border-solid border border-gray-200 rounded-md">
      <p>{title}</p>
    </div>
  );
}
