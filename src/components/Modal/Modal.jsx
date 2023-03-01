import React, { useState } from 'react';
import styles from './Modal.module.css';

export const Modal = ({ todo, handleClose, handleToggleTodo }) => {
  const [isChecked, setIsChecked] = useState(todo.status);

  const handleCheckboxInModal = () => {
    handleToggleTodo(todo.id);
    setIsChecked(!isChecked);
  };

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
            checked={isChecked}
            onChange={handleCheckboxInModal}
          />
        </div>
        <button className={styles.closeButton} onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};
