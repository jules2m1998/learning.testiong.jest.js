import { useCallback, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  const handleAdd = useCallback((user) => {
    setUsers((x) => [user, ...x]);
  }, []);
  return (
    <>
      <UserForm onAdd={handleAdd} />
      <UserList users={users} />
    </>
  );
}

export default App;
