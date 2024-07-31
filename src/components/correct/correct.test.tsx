import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Correct from ".";

describe("correct Component", () => {
  it("renders Correct component with correct text and icon", () => {
    expect.assertions(2);

    render(<Correct />);

    const icon = screen.getByTestId("check-icon");
    const text = screen.getByText(/correct/i);

    expect(icon).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
