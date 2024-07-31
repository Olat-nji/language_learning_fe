import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import DarkNav from "./DarkNav";

import "@testing-library/jest-dom";

describe("darkNav", () => {
  it("renders desktop logo", () => {
    expect.assertions(1);
    render(<DarkNav />);
    const desktopLogo = screen.getByAltText("desktop-logo");
    expect(desktopLogo).toBeInTheDocument();
  });

  it("renders mobile logo", () => {
    expect.assertions(1);
    render(<DarkNav />);
    const mobileLogo = screen.getByAltText("mobile-logo");
    expect(mobileLogo).toBeInTheDocument();
  });
});
