import React from 'react';

interface ISubmitBtn {
  isNotEnterEmail?: boolean;
  isNotEnterPassword?: boolean;
  title: string;
}

export default function SubmitBtn({
  isNotEnterEmail,
  isNotEnterPassword,
  title,
}: ISubmitBtn) {
  return (
    <div className="flex items-end justify-end">
      <button
        type={isNotEnterEmail || isNotEnterPassword ? 'button' : 'submit'}
        className="py-1 px-2 w-24 bg-gray-200 text-green-600 font-semibold rounded-md hover:scale-110 hover:ease-in duration-300 mx-2"
      >
        {title}
      </button>
    </div>
  );
}
