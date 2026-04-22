import { deletePost, updatePost } from "../services/api";
import { useState } from "react";

export default function TodoItem({ todo, todos, setTodos }) {
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const toggleComplete = async () => {
    try {
      setLoading(true);
      const updated = await updatePost(todo.id, !todo.completed); //Backend

      setTodos(
        (prev) =>
          [...prev] // Crear copia
            .map((t) =>
              t.id === todo.id ? { ...t, completed: updated.completed } : t,
            ) // Actualizar
            .sort((a, b) => a.completed - b.completed), // Ordenar
      );
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async () => {
    setDeleting(true); // activa animación

    setTimeout(async () => {
      try {
        await deletePost(todo.id);

        setTodos((prev) => prev.filter((t) => t.id !== todo.id));
      } catch (error) {
        alert(error.message);
      }
    }, 300); //duración animación
  };

  return (
    <div className={`todo ${deleting ? "removing" : ""}`}>
      <span
        onClick={!loading ? toggleComplete : undefined}
        className={todo.completed ? "completed" : ""}
        style={{
          opacity: loading ? 0.5 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {todo.text}
      </span>

      <button className="delete" onClick={deleteTodo}>
        ✕
      </button>
    </div>
  );
}
