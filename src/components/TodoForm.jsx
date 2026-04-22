import { useState } from "react";
import { createPost } from "../services/api";

export default function TodoForm({ todos, setTodos }) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const addTodo = async () => {
    if (!text.trim()) return;

    try {
      setLoading(true);

      const newPost = await createPost(text);

      setTodos((prev) =>
        [
          ...prev,
          {
            id: newPost.id,
            text: newPost.title,
            completed: newPost.completed,
          },
        ].sort((a, b) => a.completed - b.completed),
      );

      setText("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form">
      <input
        placeholder="Nueva tarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={addTodo} disabled={loading}>
        {loading ? "Agregando..." : "Agregar"}
      </button>
    </div>
  );
}
