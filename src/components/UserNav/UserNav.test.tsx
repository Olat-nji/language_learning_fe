import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import UserNav from "./UserNav";

import "@testing-library/jest-dom";

describe("adminNav", () => {
  it("renders desktop logo", () => {
    expect.assertions(1);
    render(<UserNav />);
    const desktopLogo = screen.getByAltText("desktop-logo");
    expect(desktopLogo).toBeInTheDocument();
  });

  it("renders mobile navigation with correct elements", () => {
    expect.assertions(2);
    render(<UserNav />);
    expect(screen.getAllByAltText("profile-icon")[1]).toBeInTheDocument();
    expect(screen.getByAltText("menu-icon")).toBeInTheDocument();
  });
});
