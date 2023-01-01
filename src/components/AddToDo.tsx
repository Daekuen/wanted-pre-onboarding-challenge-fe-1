import React from 'react';

export default function AddToDo() {
  return (
    <>
      <form
        action="submit"
        className="flex flex-col items-center justify-center w-full absolute bottom-0 py-6 bg-green-700 rounded-b-md"
      >
        <input
          type="text"
          placeholder="TODO를 입력해주세요..."
          className="mb-2 rounded-md py-2 px-4 w-1/2 text-base"
        />
        <input
          type="text"
          placeholder="CONTENT를 입력해주세요..."
          className="mb-5 rounded-md py-2 px-4 w-1/2 text-base"
        />
        <button
          type="submit"
          className="text-lg w-32 font-semibold py-1 px-2 text-green-600 bg-gray-200 rounded-lg"
        >
          추가하기
        </button>
      </form>
    </>
  );
}
