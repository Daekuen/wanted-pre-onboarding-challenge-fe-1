import React from 'react';

interface ITextFiled {
  text: string;
}

export default function TextFiled({ text }: ITextFiled) {
  return (
    <div className="flex w-full text-right justify-end">
      <p className="text-red-500 w-full mt-1 font-medium">{text}</p>
    </div>
  );
}
