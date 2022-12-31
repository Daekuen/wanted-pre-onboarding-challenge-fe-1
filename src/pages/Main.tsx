import React from 'react';
import MainUI from '../components/MainUI';
import SignUpIn from '../components/SignUp-In';

export default function Main() {
  return (
    <section className="flex flex-col max-w-2xl h-full items-center justify-center m-auto bg-green-600 text-gray-200 mt-10 rounded-md relative">
      <div className="flex text-6xl mb-20 py-2 font-bold justify-center border-solid border-b-2 border-gray-200 absolute top-20">
        <h1>Todo List</h1>
      </div>
      {/* <MainUI /> */}
      <SignUpIn />
    </section>
  );
}
