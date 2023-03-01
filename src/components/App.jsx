import React, { useState } from 'react';
import { Form } from './Form/Form';
import { Modal } from './Modal/Modal';
import { TodoList } from './TodoList/TodoList';

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleAddTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const handleTodoClick = todo => {
    setSelectedTodo(todo);
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
      <TodoList
        todos={todos}
        handleToggleTodo={handleToggleTodo}
        handleTodoClick={handleTodoClick}
      />
      {selectedTodo && (
        <Modal todo={selectedTodo} handleClose={() => setSelectedTodo(null)} />
      )}
    </>
  );
};
