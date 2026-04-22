import { useState } from "react";

export default function UserForm({ users, setUsers }) {
  const [name, setName] = useState("");

  const handleAddUser = () => {
    if (!name) return;

    if (users.includes(name)) {
      alert("Usuario ya existe");
      return;
    }

    setUsers([...users, name]);
    setName("");
  };

  return (
    <div>
      <input
        placeholder="Escribe un nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleAddUser}>Agregar</button>
    </div>
  );
}
