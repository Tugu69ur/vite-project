import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;

    const moveCursor = (e) => {
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3
      });
    };

    const handleMouseEnter = () => {
      gsap.to(follower, {
        scale: 1,
        opacity: 1,
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to(follower, {
        scale: 0,
        opacity: 0,
        duration: 0.3
      });
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={followerRef}
      className="fixed w-48 h-48 border-4 border-white rounded-full pointer-events-none mix-blend-difference z-50 -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default CustomCursor; 