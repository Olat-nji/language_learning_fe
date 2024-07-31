import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import LanguageSelector from "~/components/common/dropdowns/LanguageSelector";

describe("languageSelector", () => {
  it("renders Language button", () => {
    expect.assertions(1);
    render(<LanguageSelector />);
    expect(screen.getByText("Language")).toBeInTheDocument();
  });

  it("toggles dropdown on button click", () => {
    expect.assertions(2);
    render(<LanguageSelector />);
    const button = screen.getByText("Language");
    fireEvent.click(button);
    expect(screen.getByText("French")).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByText("French")).not.toBeInTheDocument();
  });

  it("renders languages in dropdown", () => {
    expect.assertions(2);
    render(<LanguageSelector />);
    const button = screen.getByText("Language");
    fireEvent.click(button);
    expect(screen.getByText("French")).toBeInTheDocument();
    expect(screen.getByText("Select new language")).toBeInTheDocument();
  });
});
