import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import MicrophoneComponent from "./MicrophoneComponent";

describe("microphoneComponent", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders initial state correctly", () => {
    expect.hasAssertions();
    render(<MicrophoneComponent />);
    expect(
      screen.getByText("Please connect your microphone while you wait."),
    ).toBeInTheDocument();
  });

  it("transitions to discovering state after 5 seconds", () => {
    expect.hasAssertions();
    render(<MicrophoneComponent />);

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(
      screen.getByText("Your microphone is now discoverable."),
    ).toBeInTheDocument();
  });

  it("transitions to connected state after 10 seconds", () => {
    expect.hasAssertions();
    render(<MicrophoneComponent />);

    act(() => {
      vi.advanceTimersByTime(10_000);
    });

    expect(screen.getByText("Connection successful!")).toBeInTheDocument();
  });

  // eslint-disable-next-line vitest/prefer-expect-assertions
  it("transitions to speaking state after 15 seconds", () => {
    render(<MicrophoneComponent />);

    act(() => {
      vi.advanceTimersByTime(15_000);
    });
  });

  it("cleans up timers on unmount", () => {
    expect.hasAssertions();
    const { unmount } = render(<MicrophoneComponent />);
    const clearTimeoutSpy = vi.spyOn(global, "clearTimeout");

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalledTimes(3);
  });
});
