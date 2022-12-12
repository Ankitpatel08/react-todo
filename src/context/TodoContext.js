import axios from "axios";
import { createContext, useCallback, useState } from "react";

export const TodoContext = createContext({
    todos: [],
    fetchTodos: () => {},
    createTodo: (title) => {},
    editTodoById: (title, id) => {},
    deleteTodoById: (id) => {}
});

export const TodoContextProvider = ({children}) => {
    const [todos, setTodos] = useState([]);

    const fetchTodos = useCallback(async () => {
        const response = await axios.get('http://localhost:3001/todos');

        setTodos(response.data);
    }, []);

    const editTodoById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/todos/${id}`, {
            title: newTitle
        });

        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, ...response.data };
            }

            return todo;
        });

        setTodos(updatedTodos);
    };

    const deleteTodoById = async (id) => {
        await axios.delete(`http://localhost:3001/todos/${id}`);

        const updatedTodos = todos.filter((todo) => {
            return todo.id !== id;
        });

        setTodos(updatedTodos);
    };

    const createTodo = async (title) => {
        const response = await axios.post('http://localhost:3001/todos', {
            title
        });

        const updatedTodos = [
            ...todos,
            response.data
        ];

        setTodos(updatedTodos);
    };

    const TodoContextValue = {
        todos,
        fetchTodos,
        createTodo,
        editTodoById,
        deleteTodoById, 
    }

    return (<TodoContext.Provider value={TodoContextValue}>
        {children}
    </TodoContext.Provider>)
}