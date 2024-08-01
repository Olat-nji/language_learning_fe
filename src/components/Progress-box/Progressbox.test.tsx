import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import NavTabs from "./Progressbox";

import "@testing-library/jest-dom";

describe("navTabs", () => {
  it("renders desktop logo", () => {
    expect.assertions(5);
    render(<NavTabs />);
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Language")).toBeInTheDocument();
    expect(screen.getByText("Notifications")).toBeInTheDocument();
    expect(screen.getByText("Invite Link")).toBeInTheDocument();
    expect(screen.getByText("Security")).toBeInTheDocument();
  });
});
