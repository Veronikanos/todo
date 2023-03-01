import { nanoid } from 'nanoid';
import React, { useState } from 'react';

export const Form = ({ handleAddTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const state = {
    title: setTitle,
    description: setDescription,
  };

  const handleInput = e => {
    // console.log(e.target);
    const { name, value } = e.target;
    state[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newObj = {
      id: nanoid(),
      title,
      description,
    };

    handleAddTodo(newObj);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} name="title" onChange={handleInput} />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          name="description"
          onChange={handleInput}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};
