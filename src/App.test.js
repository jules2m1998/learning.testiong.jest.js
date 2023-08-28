import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("can receive a new user and show it on a list", async () => {
    // Arrange
    render(<App />);

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const button = screen.getByRole("button");

    // Act
    user.click(nameInput);
    user.keyboard("test");
    user.click(emailInput);
    user.keyboard("jules@m.m");

    await waitFor(async () => {
      await user.click(button);
    });

    const name = screen.getByRole("cell", { name: /test/i });
    const email = screen.getByRole("cell", { name: /jules@m.m/i });

    // Assert
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
