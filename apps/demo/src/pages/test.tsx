import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const MyButton = () => {
  const ref = useRef(null);

  const handleClick = () => {
console.log(ref);
  };

  return (
    <Button onClick={handleClick} ref={ref}>
      Click Me
    </Button>
  );
};

export default MyButton;

const Button = styled.button`
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;
