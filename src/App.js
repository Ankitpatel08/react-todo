import { useEffect } from 'react';
import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/use-todos';

const App = () => {
    const { fetchTodos } = useTodos();

    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    return (
        <div className="app">
            <h1>Todo List</h1>
            <TodoList />
            <TodoCreate />
        </div>
    );
}

export default App;
