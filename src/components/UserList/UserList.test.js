import { render, screen } from "@testing-library/react";
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

    render(<UserList users={users} />);
    screen.logTestingPlaygroundURL(); // Testing playground

    // Act
    // Assert
  });
  test("render the email and name of each user", () => {
    // Arrange
    // Act
    // Assert
  });
});
