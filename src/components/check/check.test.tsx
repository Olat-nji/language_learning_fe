import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Check from ".";

describe("check Component", () => {
  it("renders Check component with default style", () => {
    expect.assertions(1);

    render(<Check type="Default" />);

    const icon = screen.getByTestId("check-icon");
    expect(icon).toHaveClass("text-white/50");
  });

  it("renders Check component with active style", () => {
    expect.assertions(1);

    render(<Check type="Active" />);

    const icon = screen.getByTestId("check-icon");
    expect(icon).toHaveClass("text-white");
  });

  it("renders Check component with correct style", () => {
    expect.assertions(1);

    render(<Check type="Correct" />);

    const icon = screen.getByTestId("check-icon");
    expect(icon).toHaveClass("text-success-140");
  });
});
