import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  // Arrange
  const users = [
    {
      name: "user 1",
      email: "u1@m.m",
    },
    {
      name: "user 2",
      email: "u2@m.m",
    },
  ];

  // Act
  render(<UserList users={users} />);

  return { users };
}

describe("UserList", () => {
  test("render one row per user", () => {
    renderComponent();
    const rows = within(screen.getByTestId("users")).getAllByRole("row");

    // Assert
    expect(rows).toHaveLength(2);
  });
  test("render the email and name of each user", () => {
    const { users } = renderComponent();

    // Assert
    for (const user of users) {
      const name = screen.getByRole("cell", { name: user.name });
      const email = screen.getByRole("cell", { name: user.email });
      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    }
  });
});
