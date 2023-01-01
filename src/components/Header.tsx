import { FcTodoList } from 'react-icons/fc';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { RiLoginCircleFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="max-w-4xl h-10 flex m-auto justify-between py-2 px-5 bg-green-600 text-gray-200 rounded-md">
      <div
        className="flex items-center text-3xl font-bold cursor-pointer"
        onClick={() => {
          navigate('/');
        }}
      >
        <FcTodoList className="mr-2" />
        <span>Todo-List</span>
      </div>
      <div className="flex items-center justify-center text-base font-semibold">
        <ul className="flex j">
          <li className="mr-3">
            <button
              className="flex items-center"
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
              className="flex items-center"
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
