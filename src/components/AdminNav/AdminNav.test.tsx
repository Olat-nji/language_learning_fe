import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AdminNav from "./AdminNav";

import "@testing-library/jest-dom";

describe("AdminNav", () => {
  it("renders desktop logo", () => {
    expect.assertions(1);
    render(<AdminNav />);
    const desktopLogo = screen.getByAltText("desktop-logo");
    expect(desktopLogo).toBeInTheDocument();
  });

  it("renders mobile logo", () => {
    expect.assertions(1);
    render(<AdminNav />);
    const mobileLogo = screen.getByAltText("mobile-logo");
    expect(mobileLogo).toBeInTheDocument();
  });
});
