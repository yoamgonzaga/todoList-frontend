import { useState, useEffect } from "react";
import Login from "./components/Login";
import { getPosts, getToken } from "./services/api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const userEmail = localStorage.getItem("userEmail");
  const validFilters = ["all", "pending", "completed"];
  const [filter, setFilter] = useState(() => {
    const saved = localStorage.getItem("filter");
    return validFilters.includes(saved) ? saved : "all";
  });

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getPosts();

      const mapped = data
        .map((post) => ({
          id: post.id,
          text: post.title,
          completed: post.completed,
        }))
        .sort((a, b) => a.completed - b.completed);

      setTodos(mapped);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      loadPosts();
    }
  }, [token]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

  if (!token) {
    return <Login setToken={setToken} />;
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "pending") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // all
  });

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className="container">
      <div className="card">
        <div className="top-bar">
          <div className="user-section">
            <span className="user">👤 {userEmail}</span>
            <button
              className="logout"
              onClick={() => {
                localStorage.removeItem("token");
                setTodos([]); // limpia UI
                setToken(null);
              }}
            >
              Logout
            </button>
          </div>
        </div>

        <h1 className="title">Lista de Tareas</h1>

        <div className="filters">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            Todas ({total})
          </button>

          <button
            className={filter === "pending" ? "active" : ""}
            onClick={() => setFilter("pending")}
          >
            Pendientes ({pending})
          </button>

          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Completadas ({completed})
          </button>
        </div>

        {error && <div className="error">{error}</div>}
        {loading && <p>Cargando...</p>}

        <TodoForm setTodos={setTodos} disabled={loading} />
        <TodoList todos={filteredTodos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
