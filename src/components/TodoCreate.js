import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoCreate = () => {
  const [title, setTitle] = useState('');
  const { createTodo } = useContext(TodoContext)

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo(title);
    setTitle('');
  };

  return (
    <div className="todo-create">
      <h3>Add a todo</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default TodoCreate;
