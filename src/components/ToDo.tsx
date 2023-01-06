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
  const navigate = useNavigate();
  const { title, content, id } = todo;
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const handleClick = () => {
    navigate(`/todo/${id}`, { state: { content } });
  };

  const handleDelete = async () => {
    await api.delete(`todos/${id}`);
    queryClient.invalidateQueries(['todolist']);
    navigate(`/todo/${id}`);
  };
  return (
    <>
      <div className="flex justify-between items-center py-3 px-4 my-1 text-gray-200">
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
      </div>
      {isOpenModal && (
        <Modal
          setIsOpenModal={setIsOpenModal}
          title={title}
          content={content}
          id={id}
        />
      )}
    </>
  );
}
