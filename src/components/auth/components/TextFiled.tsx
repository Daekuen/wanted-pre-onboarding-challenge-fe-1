import React from 'react';

interface ITextFiled {
  text: string;
  marginBottom: number;
}

export default function TextFiled({ text, marginBottom }: ITextFiled) {
  return (
    <div className="flex w-full text-right justify-end">
      <p className={`text-red-500 font-medium mb-${marginBottom}`}>{text}</p>
    </div>
  );
}
