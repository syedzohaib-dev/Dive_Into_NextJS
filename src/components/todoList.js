"use client";
import { useTodo } from "@/context/todoContext";
import { useState } from "react";

export default function TodoList({ onComplete, }) {
    const { todos, updateTodo, deleteTodo, deleteLoading } = useTodo();
    const [editingId, setEditingId] = useState(null);
    const [editTitle, seteditTitle] = useState("");

    const startEdit = (todo) => {
        setEditingId(todo._id);
        seteditTitle(todo.text);
    };

    const saveEdit = (id) => {
        if (editTitle.trim()) {
            updateTodo(id, editTitle.trim());
        }
        setEditingId(null);
        seteditTitle("");
    };

    if (todos.length === 0) {
        return (
            <div className="text-center py-16 text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 mx-auto mb-4 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p className="text-sm">No Task Added</p>
            </div>
        );
    }

    return (
        <ul className="space-y-3">
            {todos.map((todo, index) => (
                <li
                    key={todo._id}
                    className={`flex items-center gap-3 bg-gray-800 border rounded-xl px-4 py-3 
                      transition-all duration-300 group
                      ${todo.completed
                            ? "border-gray-700/50 opacity-60"
                            : "border-gray-700 hover:border-gray-600"
                        }`}
                >
                    {/* Complete Button */}
                    <button
                        onClick={() => onComplete(todo.id)}
                        title="Complete"
                        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center
                        transition-all duration-200
                        ${todo.completed
                                ? "bg-emerald-500 border-emerald-500"
                                : "border-gray-600 hover:border-emerald-500"
                            }`}
                    >
                        {todo.completed && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        )}
                    </button>

                    {/* Text / Edit Input */}
                    {editingId === todo._id ? (
                        <input
                            autoFocus
                            value={editTitle}
                            onChange={(e) => seteditTitle(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") saveEdit(todo._id);
                                if (e.key === "Escape") setEditingId(null);
                            }}
                            onBlur={() => saveEdit(todo._id)}
                            className="flex-1 bg-gray-700 border border-indigo-500 text-gray-100 rounded-lg
                         px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
                        />
                    ) : (
                        <span
                            className={`flex-1 text-sm transition-all duration-200
                          ${todo.completed ? "line-through text-gray-500" : "text-gray-200"}`}
                        >
                            {todo.title}
                        </span>
                    )}

                    {/* Action Buttons */}
                    <div className="flex items-center gap-1  transition-opacity duration-200">
                        {/* Edit Button */}
                        <button
                            onClick={() => startEdit(todo)}
                            title="Edit"
                            className="p-1.5 rounded-lg text-gray-500 flex justify-center items-center hover:text-amber-400 hover:bg-amber-400/10
                         transition-all duration-200"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
                            </svg>
                        </button>

                        {/* Delete Button */}
                        <button
                            disabled={deleteLoading === todo._id}
                            onClick={() => deleteTodo(todo._id)}
                            title="Delete"
                            className={`p-1.5 rounded-lg text-gray-500 flex justify-center items-center hover:text-red-400 hover:bg-red-400/10
                         transition-all duration-200 ${deleteLoading === todo._id ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {deleteLoading === todo._id
                                ?
                                (<span className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></span>)
                                :
                                (<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>)}

                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}