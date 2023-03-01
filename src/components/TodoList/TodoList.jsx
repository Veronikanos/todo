import { TodoItem } from 'components/TodoItem/TodoItem';

export const TodoList = ({ todos, handleToggleTodo }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            handleToggleTodo={handleToggleTodo}
          />
        ))}
      </tbody>
    </table>
  );
};
