"use client";
import { useState } from "react";
import TodoForm from "@/components/todoForm";
import TodoList from "@/components/todoList";

export default function Page() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prev) => [
      { id: Date.now(), text, completed: false },
      ...prev,
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const completeTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const editTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  };

  const pending = todos.filter((t) => !t.completed).length;
  const done = todos.filter((t) => t.completed).length;

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 flex items-start justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        {/* Todo Form */}
        <TodoForm onAdd={addTodo} />

        {/* Todo List */}
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onComplete={completeTodo}
          onEdit={editTodo}
        />

        {/* Clear completed */}
        {done > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setTodos((prev) => prev.filter((t) => !t.completed))}
              className="text-xs text-gray-600 hover:text-red-400 transition-colors duration-200 underline underline-offset-2"
            > ({done})
            </button>
          </div>
        )}
      </div>
    </main>
  );
}