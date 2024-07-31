import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LightNav from "./DefaultNav";

import "@testing-library/jest-dom";

describe("lightNav", () => {
  it("renders desktop logo", () => {
    expect.assertions(1);
    render(<LightNav />);
    const desktopLogo = screen.getByAltText("desktop-logo");
    expect(desktopLogo).toBeInTheDocument();
  });

  it("renders mobile logo", () => {
    expect.assertions(1);
    render(<LightNav />);
    const mobileLogo = screen.getByAltText("mobile-logo");
    expect(mobileLogo).toBeInTheDocument();
  });
});
