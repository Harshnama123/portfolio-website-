"use client";
import React, { useState, useEffect } from 'react';

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    let timeouts = [];
    
    const handleMouseMove = (e) => {
      if (!isEnabled) return;
      
      const trail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };

      setTrails(prev => [...prev, trail]);

      const timeout = setTimeout(() => {
        setTrails(prev => prev.filter(t => t.id !== trail.id));
      }, 500);

      timeouts.push(timeout);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Disable on mobile devices
    if (window.matchMedia('(hover: none)').matches) {
      setIsEnabled(false);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      timeouts.forEach(t => clearTimeout(t));
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <>
      {trails.map(trail => (
        <div
          key={trail.id}
          className="pointer-events-none fixed z-50 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mix-blend-screen"
          style={{
            left: trail.x - 3,
            top: trail.y - 3,
            opacity: 0,
            animation: 'trail 500ms ease-out',
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes trail {
          0% {
            opacity: 0.8;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(2);
          }
        }
      `}</style>
    </>
  );
};

export default CursorTrail;
