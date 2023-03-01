import React from 'react';
import styles from './Modal.module.css';

export const Modal = ({ todo, handleClose, handleToggleTodo }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <h2>{todo.title}</h2>
        <p>Description:</p>
        <p>{todo.description}</p>
        <div>
          <span>Status:</span>
          <input
            type="checkbox"
            checked={todo.status}
            onChange={() => handleToggleTodo(todo.id)}
          />
        </div>
        <button className={styles.closeButton} onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};
