import styles from './TodoItem.module.css';

export const TodoItem = ({
  todo,
  index,
  handleToggleTodo,
  handleTodoClick,
}) => {
  return (
    <>
      <tr className={styles.todoRow}>
        <td>{index + 1}.</td>
        <td className={styles.titleTodo} onClick={() => handleTodoClick(todo)}>
          {todo.title}
        </td>
        <td onClick={() => handleTodoClick(todo)}>{todo.description}</td>
        <td>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={todo.status}
            onChange={() => handleToggleTodo(todo.id)}
          ></input>
        </td>
      </tr>
    </>
  );
};
