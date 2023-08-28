import { useMemo } from "react";

const UserList = ({ users }) => {
  const table = useMemo(() => {
    return users.map((x) => (
      <tr key={x.email}>
        <td>{x.name}</td>
        <td>{x.email}</td>
      </tr>
    ));
  }, [users]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody data-testid="users">{table}</tbody>
    </table>
  );
};

export default UserList;
