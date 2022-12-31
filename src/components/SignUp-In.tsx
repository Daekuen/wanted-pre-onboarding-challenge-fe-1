import React from 'react';

export default function SignUpIn() {
  return (
    <div>
      <div className="flex items-center justify-center text-3xl font-medium mb-20 py-4 border-solid border border-gray-200 rounded-md">
        <p>SIGN UP</p>
      </div>
      <div className="flex justify-center h-1/3">
        <div className="flex flex-col mr-5 text-xl font-semibold">
          <span className="mb-5 py-1 px-3">e-mail</span>
          <span className="py-1 px-3">Passowrd</span>
        </div>
        <form action="submit" className="text-black">
          <div className="mb-5">
            <input type="text" id="email" className="rounded-md py-1 px-3" />
          </div>
          <div>
            <input
              type="password"
              id="password"
              className="rounded-md py-1 px-3"
            />
          </div>
          <div className="mt-5 flex items-end justify-end">
            <button
              type="submit"
              className="text-lg font-semibold py-1 px-2 text-green-600 bg-gray-200 rounded-lg"
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
