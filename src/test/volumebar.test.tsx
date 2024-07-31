import { render, screen } from "@testing-library/react";

import VolumeBar from "~/components/miscellaneous/Volume";

describe("volumeBar Component", () => {
  it("renders correctly with the initial level", () => {
    expect.hasAssertions();
    render(<VolumeBar />);

    const input = screen.getByRole("slider");

    expect(input).toBeInTheDocument();
  });
});
