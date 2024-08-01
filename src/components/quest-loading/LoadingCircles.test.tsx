// src/components/loading/LoadingCircles.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LoadingCircles from "./LoadingCircles";

describe("loading circles", () => {
  it("renders correctly", () => {
    expect.hasAssertions();

    render(<LoadingCircles />);

    const circles = screen.getAllByTestId("loading-circle");
    expect(circles).toHaveLength(3);

    for (const [index, circle] of circles.entries()) {
      expect(circle).toHaveClass("w-4 h-4 bg-white rounded-full");
      expect(circle).toHaveClass(`animate-pulse-${index + 1}`);
    }
  });
});
