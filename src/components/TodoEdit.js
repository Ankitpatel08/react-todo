import { useContext, useState } from 'react';

import { TodoContext } from '../context/TodoContext';

const TodoEdit = ({ todo, onSubmit }) => {
  const [title, setTitle] = useState(todo.title);
  const { editTodoById } = useContext(TodoContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editTodoById(todo.id, title);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default TodoEdit;
