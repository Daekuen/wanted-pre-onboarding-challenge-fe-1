import { useQuery, useQueryClient } from '@tanstack/react-query';
import AddToDo from '../components/AddToDo';
import ToDo from '../components/ToDo';
import api from '../api/customAxios';
import Loading from '../components/Loading';
import { useEffect } from 'react';

export type TodoType = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export default function TodoList() {
  const {
    isLoading,
    data: todoList,
    refetch,
  } = useQuery(
    ['todolist'],
    async () => {
      const todoList = await api.get('/todos');
      return todoList.data;
    },
    { refetchOnWindowFocus: false, staleTime: 60 * 1000 * 5 }
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) return <Loading />;
  return (
    <section className="flex flex-col max-w-2xl h-full items-center justify-center m-auto bg-green-600 text-gray-200 mt-10 rounded-md relative">
      <div className="flex text-6xl py-2 font-bold justify-center border-solid border-b-2 border-gray-200 absolute top-20">
        <h1>Todo List</h1>
      </div>
      <ul className="flex flex-col w-2/3 justify-center">
        {todoList.data.map((todo: TodoType) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </ul>
      <AddToDo />
    </section>
  );
}
