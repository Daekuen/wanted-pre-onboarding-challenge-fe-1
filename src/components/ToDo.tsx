import React, { useRef, useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import { HiChevronDoubleRight } from 'react-icons/hi';
import { MdEdit } from 'react-icons/md';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { TodoType } from '../pages/TodoList';
import api from '../api/customAxios';
import { useQueryClient } from '@tanstack/react-query';
import Modal from './Modal';

interface ToDoProps {
  todo: TodoType;
}

export default function ToDo({ todo }: ToDoProps) {
  const queryClient = useQueryClient();
  const { title, content, id } = todo;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) navigate(`/${id}`);
    if (isOpen) navigate('/');
  };

  const handleDelete = async () => {
    await api.delete(`todos/${id}`);
    queryClient.invalidateQueries(['todolist']);
  };
  return (
    <>
      <li className="flex justify-between items-center py-3 px-4 my-1 text-gray-200">
        <div
          className="flex items-center text-2xl font-semibold"
          onClick={handleClick}
        >
          <HiChevronDoubleRight />
          <p className="flex-auto ml-4 cursor-pointer">{title}</p>
        </div>
        <div>
          <span
            className="mr-3 text-2xl"
            onClick={() => {
              setIsOpenModal(!isOpenModal);
            }}
          >
            <button type="button" className="cursor-pointer">
              <MdEdit />
            </button>
          </span>
          <span className="text-2xl" onClick={handleDelete}>
            <button type="button" className="cursor-pointer">
              <BsTrashFill />
            </button>
          </span>
        </div>
      </li>
      {isOpenModal && (
        <Modal
          setIsOpenModal={setIsOpenModal}
          title={title}
          content={content}
          id={id}
        />
      )}
      <Routes>
        <Route
          path="/:id"
          element={
            isOpen && (
              <div
                className="bg-gray-200 text-green-700 p-3 h-28 rounded-b-md"
                ref={contentRef}
              >
                <p className="font-bold">CONTENT</p>
                <p className="text-lg">{content}</p>
              </div>
            )
          }
        />
      </Routes>
    </>
  );
}
