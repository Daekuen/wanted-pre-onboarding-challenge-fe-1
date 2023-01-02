import React, { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/customAxios';
import { useQueryClient } from '@tanstack/react-query';

interface ModalProps {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  title: string;
  content: string;
  id: string;
}

export default function Modal({
  setIsOpenModal,
  title,
  content,
  id,
}: ModalProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [editTitle, setEditTitle] = useState<string>(title);
  const [editContent, setEditContent] = useState<string>(content);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editTitle || !editContent) return;

    try {
      await api.put(`/todos/${id}`, { title: editTitle, content: editContent });
      queryClient.invalidateQueries(['todolist']);
      setIsOpenModal(false);
      alert('수정되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center z-40"
      onClick={() => {
        setIsOpenModal(false);
      }}
    >
      <div
        className="absolute w-1/2 h-2/5 bg-green-600 rounded-xl px-16 py-10"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
        <div className="flex justify-center items-center text-4xl font-bold mb-10">
          <p>수정하기</p>
        </div>
        <form action="submit" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="titl" className="block font-bold text-2xl mb-2">
              TITLE
            </label>
            <input
              type="text"
              placeholder="TITLE을 입력해 주세요.."
              id="title"
              name="title"
              defaultValue={editTitle}
              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                setEditTitle(e.target.value);
              }}
              className="w-full px-3 py-2 rounded-md text-black text-lg"
            />
          </div>
          <div>
            <label htmlFor="content" className="block font-bold text-2xl mb-2">
              CONTENT
            </label>
            <textarea
              placeholder="CONTENT를 입력해 주세요.."
              id="content"
              defaultValue={editContent}
              onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                setEditContent(e.target.value);
              }}
              className="w-full h-32 px-3 py-2 rounded-md text-black resize-none text-lg"
            />
          </div>
          <div className="flex items-center justify-center mt-5">
            <button
              className="px-5 py-1 bg-gray-200 text-green-600 font-semibold mr-5 rounded-md hover:scale-110 hover:ease-in duration-300"
              onClick={() => {
                setIsOpenModal(false);
                navigate('/');
              }}
            >
              취 소
            </button>
            <button
              type="submit"
              className="px-5 py-1 bg-gray-200 text-green-600 font-semibold rounded-md hover:scale-110 hover:ease-in duration-300"
            >
              수 정
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
