import { BsFillPersonPlusFill } from 'react-icons/bs';
import { RiLoginCircleFill, RiLogoutCircleFill } from 'react-icons/ri';
import { IHeaderBtn } from '../types';

export default function HeaderBtn({ text, onGoPage }: IHeaderBtn) {
  return (
    <button
      className="flex items-center rounded-md px-2 py-1 hover:scale-110 hover:ease-in duration-300 hover:bg-gray-200 hover:text-green-600"
      onClick={onGoPage}
    >
      {text === 'LOGOUT' && <RiLogoutCircleFill className="mr-1" />}
      {text === 'SIGN UP' && <BsFillPersonPlusFill className="mr-1" />}
      {text === 'LOGIN' && <RiLoginCircleFill className="mr-1" />}
      <span>{text}</span>
    </button>
  );
}
