import React, { useEffect, useState } from 'react';
import { Form } from './Form/Form';
import { TodoList } from './TodoList/TodoList';

export const App = () => {
  const [todos, setTodos] = useState([]);
  // console.log(todos);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleAddTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <Form handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </>
  );
};
