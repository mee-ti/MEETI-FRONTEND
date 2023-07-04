import { useState } from 'react';

export default function useInput(ininialValue) {
  const [inputValue, setInputValue] = useState(ininialValue);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return [inputValue, handleChange];
}