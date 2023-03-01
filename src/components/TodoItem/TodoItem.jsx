export const TodoItem = ({ todo, index, handleToggleTodo }) => {
  return (
    <tr>
      <td>{index + 1}.</td>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>
        <input
          type="checkbox"
          checked={todo.status}
          onChange={() => handleToggleTodo(todo.id)}
        ></input>
      </td>
    </tr>
  );
};
