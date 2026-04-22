export default function UserList({ users, setUsers }) {
  const handleDelete = (indexToDelete) => {
    const updatedUsers = users.filter((_, index) => index !== indexToDelete);
    setUsers(updatedUsers);
  };

  if (users.length === 0) {
    return <p>No hay usuarios</p>;
  }

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <span>{user}</span>

          <button onClick={() => handleDelete(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
