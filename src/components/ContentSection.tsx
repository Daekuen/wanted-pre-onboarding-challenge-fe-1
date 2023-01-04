import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ContentSection() {
  const location = useLocation();
  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (location.state === null) {
      setText('');
      return;
    }
    location.state.content && setText(location.state.content);
  }, [location.state]);

  console.log(text);
  return (
    <div className="w-1/2 flex items-center justify-center text-xl font-semibold">
      <p>{text}</p>
    </div>
  );
}
