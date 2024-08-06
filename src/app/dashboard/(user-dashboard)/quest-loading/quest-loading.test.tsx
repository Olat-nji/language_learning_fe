// QuestLoadingScreen.test.tsx

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import QuestLoadingScreen from "./page";

describe("questLoadingScreen", () => {
  it("renders LevelDisplay component", () => {
    expect.hasAssertions();
    render(<QuestLoadingScreen />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});
