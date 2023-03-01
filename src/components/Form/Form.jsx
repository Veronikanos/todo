import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import styles from './Form.module.css';

export const Form = ({ handleAddTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleInput = e => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value.trim());
      setTitleError(false);
    } else if (name === 'description') {
      setDescription(value.trim());
      setDescriptionError(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!title) setTitleError(true);
    if (!description) setDescriptionError(true);
    if (!title || !description) return;

    const newObj = {
      id: nanoid(),
      title,
      description,
      status: false,
    };

    handleAddTodo(newObj);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          className={titleError ? styles.errorInput : ''}
          type="text"
          value={title}
          name="title"
          placeholder="Enter title:"
          onChange={handleInput}
        />
      </label>
      <label>
        Description:
        <input
          className={descriptionError ? styles.errorInput : ''}
          type="text"
          value={description}
          name="description"
          placeholder="Enter description:"
          onChange={handleInput}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};
