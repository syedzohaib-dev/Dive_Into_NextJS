'use client'
import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [circle, setCircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    let animFrame;
    const follow = () => {
      setCircle(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.1,
        y: prev.y + (pos.y - prev.y) * 0.1,
      }));
      animFrame = requestAnimationFrame(follow);
    };
    animFrame = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animFrame);
  }, [pos]);

  return (
    <>
      {/* Small dot */}
      <div
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{ left: pos.x, top: pos.y }}
      />
      {/* Following circle */}
      <div
        className="fixed w-10 h-10 border-2 border-violet-400 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
        style={{ left: circle.x, top: circle.y }}
      />
    </>
  );
}