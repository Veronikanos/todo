import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import styles from './Form.module.css';

export const Form = ({ handleAddTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [inputError, setInputError] = useState('');

  const state = {
    title: setTitle,
    description: setDescription,
  };

  const handleInput = e => {
    setInputError('');
    const { name, value } = e.target;
    state[name](value.trim());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !description) {
      title ? setInputError('description') : setInputError('title');
      return;
    }

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

  const inputTitleStyle =
    inputError === 'title' ? styles['error-classname'] : '';
  const inputDescriptionStyle =
    inputError === 'description' ? styles['error-classname'] : '';

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          className={inputTitleStyle}
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
          className={inputDescriptionStyle}
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
