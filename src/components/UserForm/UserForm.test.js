import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

describe("User from", () => {
  test("it shows two inputs and a button", () => {
    // Arrange
    render(<UserForm />);

    // Act
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");

    // Assert
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });
  test("it not calls onUserAdd when the form is submitted without values", () => {
    // Arrange
    const mock = jest.fn();
    render(<UserForm onAdd={mock} />);
    const button = screen.getByRole("button");

    //Act
    user.click(button);

    //Assert
    expect(mock).not.toHaveBeenCalled();
  });
  test("it calls onUserAdd when the form is submitted with values", () => {
    // Arrange
    const mock = jest.fn();
    render(<UserForm onAdd={mock} />);
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emainInput = screen.getByRole("textbox", { name: /email/i });
    const button = screen.getByRole("button");

    //Act
    user.click(nameInput);
    user.keyboard("jules");
    user.click(emainInput);
    user.keyboard("jules@j.jm");
    user.click(button);

    //Assert
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: "jules", email: "jules@j.jm" });
  });
});
