import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Speakers from ".";

describe("speakers Component", () => {
  it("renders Speakers component with loud icon", () => {
    expect.assertions(1);

    render(<Speakers type="Loud" />);

    const icon = screen.getByTestId("volume-loud");
    expect(icon).toHaveClass("text-white");
  });

  it("renders Speakers component with default icon", () => {
    expect.assertions(1);

    render(<Speakers type="Default" />);

    const icon = screen.getByTestId("volume-default");
    expect(icon).toHaveClass("text-white/50");
  });
});
