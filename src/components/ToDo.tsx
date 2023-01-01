import React, { useRef, useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { MdEdit } from 'react-icons/md';
import { Route, Routes, useNavigate } from 'react-router-dom';

export default function ToDo() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) navigate('/123');
    if (isOpen) navigate('/');
  };
  return (
    <>
      <li className="flex justify-between items-center py-3 px-4 my-1 text-gray-200">
        <div
          className="flex items-center text-2xl font-semibold"
          onClick={handleClick}
        >
          <HiChevronDoubleRight />
          <p className="flex-auto ml-4 cursor-pointer"> React 공부</p>
        </div>
        <div>
          <span className="mr-3 text-2xl">
            <button type="button" className="cursor-pointer">
              <MdEdit />
            </button>
          </span>
          <span className="text-2xl">
            <button type="button" className="cursor-pointer">
              <BsTrashFill />
            </button>
          </span>
        </div>
      </li>
      <Routes>
        <Route
          path="123"
          element={
            isOpen && (
              <div
                className="bg-gray-200 text-green-700 p-3 h-28 rounded-b-md"
                ref={contentRef}
              >
                <p className="font-bold">CONTENT</p>
                <p className="text-lg">여기가 콘텐츠 적는곳이닷</p>
              </div>
            )
          }
        />
      </Routes>
    </>
  );
}
