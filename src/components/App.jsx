import React, { useState } from 'react';
import { Form } from './Form/Form';

export const App = () => {
  // state = {
  //   todo: [],
  // };

  const [todos, setTodos] = useState([]);
  // console.log(todos);

  // useEffect(() => {
  //   ;
  // }, [todos]);

  const handleAddTodo = newTodo => {
    setTodos = [newTodo, ...todos];
  };

  return (
    <>
      <Form handleAddTodo={handleAddTodo} />
    </>
  );
};
