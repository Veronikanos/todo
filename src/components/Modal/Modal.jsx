import React from 'react';
import styles from './Modal.module.css';

export const TodoModal = ({ todo, handleClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <h2>{todo.title}</h2>
        <p>Description:</p>
        <p>{todo.description}</p>
        <div>
          <span>Status:</span>
          <input type="checkbox" checked={todo.status} />
        </div>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
};
