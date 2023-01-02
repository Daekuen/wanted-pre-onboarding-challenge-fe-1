import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import api from '../api/customAxios';
import SubmitBtn from './SubmitBtn';

type Todo = {
  title: string;
  content: string;
};

export default function AddToDo() {
  const queryClient = useQueryClient();
  const [todo, setTodo] = useState<Todo>({ title: '', content: '' });
  const addTodoMutation = useMutation(
    async (todo: Todo) => {
      await api.post('/todos', todo);
    },
    {
      onSuccess: (res) => {
        queryClient.invalidateQueries(['todolist']);
        console.log(res);
      },
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo.title || !todo.content) return;

    try {
      addTodoMutation.mutate(todo);
      setTodo({ title: '', content: '' });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        action="submit"
        className="flex flex-col items-center justify-center w-full absolute bottom-0 py-6 bg-green-700 rounded-b-md"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="title"
          value={todo.title}
          onChange={handleChange}
          placeholder="TODO를 입력해주세요..."
          className="mb-2 rounded-md py-2 px-4 w-1/2 text-base text-black"
        />
        <input
          type="text"
          name="content"
          value={todo.content}
          onChange={handleChange}
          placeholder="CONTENT를 입력해주세요..."
          className="mb-5 rounded-md py-2 px-4 w-1/2 text-base text-black"
        />
        <SubmitBtn title="추가하기" />
      </form>
    </>
  );
}
