export const TodoList = ({ todos }) => {
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
        <tr>
          {todos.map((todo, index) => (
            <>
              <td key={todo.id}>{index + 1}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>
                <input type="checkbox" checked={todo.status}></input>
              </td>
            </>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
