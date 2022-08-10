import React, { useState } from 'react';

export const useText = () => {
  const [title, setText] = useState('');

  const handler = (e) => {
    setText(e.target.value);
  };
  return [title, handler];
};
