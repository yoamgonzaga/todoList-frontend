const API_URL = "https://user-crud-prisma.onrender.com/api";

export function getToken() {
  return localStorage.getItem("token");
}

function getHeaders() {
  const token = getToken();

  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

export async function login(email, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Error en login");
  }

  return res.json();
}

export async function getPosts() {
  const res = await fetch(`${API_URL}/my-posts`, {
    headers: getHeaders(),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Error en API");
  }

  return res.json();
}

export async function createPost(text) {
  const res = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      title: text,
      content: text,
    }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Error en API");
  }

  return res.json();
}

export async function deletePost(id) {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    method: "DELETE",
    headers: getHeaders(),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Error al eliminar");
  }
}

export async function updatePost(id, completed) {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify({ completed }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Error al actualizar");
  }
  return res.json();
}
