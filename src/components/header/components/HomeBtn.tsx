import { FcTodoList } from 'react-icons/fc';

interface IHomeBtn {
  onGoMain: () => void;
  onGoTodos: () => void;
  hasToken: boolean;
}

export default function HomeBtn({ hasToken, onGoMain, onGoTodos }: IHomeBtn) {
  return (
    <div
      className="flex items-center text-3xl font-bold cursor-pointer rounded-md px-3 py-1 hover:scale-110 hover:ease-in duration-300 hover:bg-gray-200 hover:text-green-600"
      onClick={hasToken ? onGoTodos : onGoMain}
    >
      <FcTodoList className="mr-2" />
      <span>Todo-List</span>
    </div>
  );
}
