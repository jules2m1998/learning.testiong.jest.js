import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList", () => {
  test("render one row per user", () => {
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
    const { container } = render(<UserList users={users} />);
    // eslint-disable-next-line
    const rows = container.querySelectorAll("tbody tr");

    // Assert
    expect(rows).toHaveLength(2);
  });
  test("render the email and name of each user", () => {
    // Arrange
    // Act
    // Assert
  });
});
