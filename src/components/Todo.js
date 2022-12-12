import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoEdit from './TodoEdit';

const Todo = ({ todo }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteTodoById } = useContext(TodoContext);

  const handleDeleteClick = () => {
    deleteTodoById(todo.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
  };

  let content = <h3>{todo.title}</h3>;

  if (showEdit) {
    content = <TodoEdit onSubmit={handleSubmit} todo={todo} />;
  }

  return (
    <div className="todo-show">
      <img alt="todo" src={`https://picsum.photos/seed/${todo.id}/300/200`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
