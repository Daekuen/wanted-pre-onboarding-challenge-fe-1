import React from 'react';
import AddToDo from '../components/AddToDo';
import ToDo from '../components/ToDo';
import { Route, Routes } from 'react-router-dom';

export default function TodoList() {
  return (
    <section className="flex flex-col max-w-2xl h-full items-center justify-center m-auto bg-green-600 text-gray-200 mt-10 rounded-md relative">
      <div className="flex text-6xl py-2 font-bold justify-center border-solid border-b-2 border-gray-200 absolute top-20">
        <h1>Todo List</h1>
      </div>
      <ul className="flex flex-col w-2/3 justify-center">
        <ToDo />
      </ul>
      <AddToDo />
    </section>
  );
}
