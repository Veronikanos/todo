import React, { useState } from 'react';
import { Form } from './Form/Form';
import { TodoList } from './TodoList/TodoList';

export const App = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const handleToggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <Form handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleToggleTodo={handleToggleTodo} />
    </>
  );
};
