import { useCallback } from "react";

export default function UserForm({ onAdd }) {
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      if (!data.name || !data.email) return;
      onAdd(data);
    },
    [onAdd]
  );
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <button>Add user</button>
    </form>
  );
}
