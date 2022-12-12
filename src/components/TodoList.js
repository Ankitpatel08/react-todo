import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Todo from './Todo';

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  const rendereTodos = todos?.map((todo) => {
    return (
      <Todo key={todo.id} todo={todo} />
    );
  });

  return <div className="todo-list">{rendereTodos}</div>;
}

export default TodoList;
