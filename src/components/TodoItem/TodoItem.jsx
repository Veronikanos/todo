import { TodoModal } from 'components/Modal/Modal';
import { useState } from 'react';
import styles from './TodoItem.module.css';

export const TodoItem = ({ todo, index, handleToggleTodo }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <tr>
        <td>{index + 1}.</td>
        <td className={styles.titleTodo} onClick={handleModalOpen}>
          {todo.title}
        </td>
        <td>{todo.description}</td>
        <td>
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => handleToggleTodo(todo.id)}
          ></input>
        </td>
      </tr>
      {modalOpen && <TodoModal todo={todo} handleClose={handleModalClose} />}
    </>
  );
};
