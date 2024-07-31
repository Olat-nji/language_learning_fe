import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import ToggleSwitch from "./ToggleSwitch";

describe("toggleSwitch component", () => {
  it("renders on the DOM", () => {
    expect.assertions(1);
    render(<ToggleSwitch />);
    const toggleElement = screen.getByRole("button");
    expect(toggleElement).toBeInTheDocument();
  });

  it("renders with the correct initial background color", () => {
    expect.assertions(1);
    render(<ToggleSwitch />);
    const toggleElement = screen.getByRole("button");
    expect(toggleElement).toHaveClass("bg-neutral-40");
  });

  it("renders with the correct variant class when bordered", () => {
    expect.assertions(1);
    render(<ToggleSwitch variant="bordered" />);
    const toggleElement = screen.getByRole("button");
    expect(toggleElement).toHaveClass("border-2");
  });
});
