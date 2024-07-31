import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import LightNav from "./LightNav";

import "@testing-library/jest-dom";

describe("lightNav", () => {
  it("renders desktop logo", () => {
    expect.assertions(1);
    render(<LightNav />);
    const desktopLogo = screen.getByAltText("desktop-logo");
    expect(desktopLogo).toBeInTheDocument();
  });

  it("renders Sign In and Sign Up buttons when not signed in", () => {
    expect.assertions(2); // Adding this line to specify the number of assertions in the test
    render(<LightNav />);
    const signInButton = screen.getByText("Sign In");
    const signUpButtons = screen.getAllByText("Sign Up");
    expect(signInButton).toBeInTheDocument();
    expect(signUpButtons.length).toBeGreaterThan(0);
  });
});
