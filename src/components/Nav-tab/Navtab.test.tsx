import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import NavTabs from "./Navtab";

import "@testing-library/jest-dom";

describe("NavTabs", () => {
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
