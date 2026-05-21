'use client';
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(null);


    const fetchTodos = async () => {
        try {
            setLoading();
            const res = await axios.get('http://localhost:3000/api/todos');
            console.log(res.data)
            setTodos(res.data.todo);

        } catch (error) {
            console.log('fetch todo error', error)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = async (title) => {
        try {
            setLoading(true);
            const res = await axios.post('http://localhost:3000/api/todos', { title });
            console.log(res)
            fetchTodos();
        }
        catch (error) {
            console.log('post todo error', error)
        }
        finally {
            setLoading(false);
        }
    }

    const updateTodo = async (id, title) => {
        try {
            setLoading(true);
            const res = await axios.put(`http://localhost:3000/api/todos/${id}`, { title });
            console.log(res)
            fetchTodos();
        } catch (error) {
            console.log('Edit todo error', error)
        }
        finally {
            setLoading(false);
        }
    }

    const deleteTodo = async (id) => {
        try {
            setDeleteLoading(id);
            const res = await axios.delete(`http://localhost:3000/api/todos/${id}`);
            console.log(res)
            fetchTodos();
        } catch (error) {
            console.log('Delete todo error ', error)
        }
        finally {
            setDeleteLoading(false);
        }
    }


    return (
        <TodoContext.Provider
            value={{
                todos,
                loading,
                deleteLoading,
                addTodo,
                // toggleTodo,
                updateTodo,
                deleteTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}





export const useTodo = () => useContext(TodoContext);