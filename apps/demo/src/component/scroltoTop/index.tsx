import React, { useState, useEffect, memo } from 'react';
import Image from 'next/image';
const ScrollTopArrow = memo(function ScrollTopArrow() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <img
      src="/topArrow.svg"
      style={{ display: showScroll ? 'flex' : 'none' }}
      className="scrollTop"
      onClick={scrollTop}
      alt="Arrow"
      title="Move to top"
    />
  );
});

export default ScrollTopArrow;
