import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import IconPanel from "~/components/speakingStates/audio";

describe("iconPanel", () => {
  it("renders the AudioLine icon", () => {
    expect.hasAssertions();
    render(<IconPanel />);
    const audiolineIcon = screen.getByTestId("audioline-icon");
    expect(audiolineIcon).toBeInTheDocument();
  });

  it("renders the Mic icon", () => {
    expect.hasAssertions();
    render(<IconPanel />);
    const micIcon = screen.getByTestId("mic-icon");
    expect(micIcon).toBeInTheDocument();
  });

  it("renders the animated pulsing Mic icon", () => {
    expect.hasAssertions();
    render(<IconPanel />);
    const pulseMicIcon = screen.getByTestId("pulse-mic-icon");
    expect(pulseMicIcon).toBeInTheDocument();
  });

  it("renders the Mic Off icon", () => {
    expect.hasAssertions();
    render(<IconPanel />);
    const micOffIcon = screen.getByTestId("micoff-icon");
    expect(micOffIcon).toBeInTheDocument();
  });
});
