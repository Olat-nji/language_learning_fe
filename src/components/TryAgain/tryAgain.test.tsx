import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import TryAgain from ".";

describe("tryAgain Component", () => {
  it("renders TryAgain component with correct text and icon", () => {
    expect.assertions(2);

    render(<TryAgain />);

    const icon = screen.getByTestId("rotate-icon");
    const text = screen.getByText(/try again/i);

    expect(icon).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
