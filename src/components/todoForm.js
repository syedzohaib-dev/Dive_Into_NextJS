"use client";
import { useTodo } from "@/context/todoContext";
import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const { addTodo, loading } = useTodo()
  const [title, settitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo(title);
    settitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 mb-8"
    >
      <input
        type="title"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        placeholder="Type your task here..."
        className="flex-1 bg-gray-800 border border-gray-700 title-gray-100 placeholder-gray-500
                   rounded-xl px-5 py-3 title-sm focus:outline-none focus:border-indigo-500
                   focus:ring-2 focus:ring-indigo-500/30 transition-all duration-200"
      />
      <button
        disabled={loading}
        type="submit"
        className={` ${loading ? 'bg-gray-400' : 'bg-indigo-600'} active:scale-95 title-white font-semibold
                   px-6 py-3 rounded-xl title-sm transition-all duration-200 flex items-center gap-2
                   shadow-lg shadow-indigo-600/30`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add
      </button>
    </form >
  );
}