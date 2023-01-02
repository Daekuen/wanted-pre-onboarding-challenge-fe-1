import React from 'react';

export default function SubmitBtn({ title }: { title: string }) {
  return (
    <button
      type="submit"
      className="py-1 px-2 w-24 bg-gray-200 text-green-600 font-semibold rounded-md hover:scale-110 hover:ease-in duration-300 mx-2"
    >
      {title}
    </button>
  );
}
