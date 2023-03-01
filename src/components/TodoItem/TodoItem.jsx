import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import styles from './TodoItem.module.css';

export const TodoItem = ({
  todo,
  index,
  handleToggleTodo,
  handleTodoClick,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  // const handleModalOpen = () => {
  //   setModalOpen(true);
  // };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <>
      <tr>
        <td>{index + 1}.</td>
        <td className={styles.titleTodo} onClick={() => handleTodoClick(todo)}>
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
      {modalOpen && (
        <Modal
          todo={todo}
          handleClose={handleModalClose}
          handleToggleTodo={handleToggleTodo}
        />
      )}
    </>
  );
};
