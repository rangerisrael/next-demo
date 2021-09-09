import React, { useState, useEffect } from 'react';
const Typewritter = ({ title = '', dataText }: TyperProps) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [loop, setLoop] = useState(0);

  const i: number = loop % dataText.length;
  const fullText: string = dataText[i];

  const handleTyping = () => {
    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );

    setSpeed(isDeleting ? 30 : 100);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 100);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoop(loop + 1);
    }
  };

    useEffect(() => {
      const timer = setTimeout(() => {
        handleTyping();
      }, speed);
      return () => clearTimeout(timer);
    });

  return (
    <h1>
      {title} {text}
    </h1>
  );
};

interface TyperProps {
  dataText: string[];
  title?: string;
}

export default Typewritter;
