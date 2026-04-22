import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  if (todos.length === 0) {
    return <p>No hay tareas</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
