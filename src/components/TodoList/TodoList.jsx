import { TodoItem } from 'components/TodoItem/TodoItem';
import styles from './TodoList.module.css';

export const TodoList = ({ todos, handleToggleTodo }) => {
  return (
    <table className={styles.todoTable}>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
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
