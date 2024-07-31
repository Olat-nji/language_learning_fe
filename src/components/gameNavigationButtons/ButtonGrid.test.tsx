// ButtonGrid.test.tsx

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import ButtonGrid from "./ButtonGrid"; // Adjust the import path as necessary

describe("buttonGrid component", () => {
  it("renders ButtonGrid component without crashing", () => {
    expect.assertions(1);
    render(<ButtonGrid />);
    const buttonElement = screen.getByTestId("button-1"); // Check for the first button
    expect(buttonElement).toBeInTheDocument();
  });
});
