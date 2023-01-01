import { FcTodoList } from 'react-icons/fc';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { RiLoginCircleFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="max-w-4xl h-10 flex m-auto justify-between py-2 px-5 bg-green-600 text-gray-200 rounded-md">
      <div
        className="flex items-center text-3xl font-bold cursor-pointer rounded-md px-3 py-1 hover:scale-110 hover:ease-in duration-300 hover:bg-gray-200 hover:text-green-600"
        onClick={() => {
          navigate('/');
        }}
      >
        <FcTodoList className="mr-2" />
        <span>Todo-List</span>
      </div>
      <div className="flex items-center justify-center text-base font-semibold ">
        <ul className="flex j">
          <li className="mr-3">
            <button
              className="flex items-center rounded-md px-2 py-1 hover:scale-110 hover:ease-in duration-300 hover:bg-gray-200 hover:text-green-600"
              onClick={() => {
                navigate('/auth/signup');
              }}
            >
              <BsFillPersonPlusFill className="mr-1" />
              <span>SIGN UP</span>
            </button>
          </li>
          <li>
            <button
              className="flex items-center rounded-md px-2 py-1 hover:scale-110 hover:ease-in duration-300 hover:bg-gray-200 hover:text-green-600"
              onClick={() => {
                navigate('/auth/login');
              }}
            >
              <RiLoginCircleFill className="mr-1" />
              <span>LOGIN</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
