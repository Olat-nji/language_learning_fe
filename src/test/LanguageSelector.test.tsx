import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageSelector from "~/components/common/dropdowns/LanguageSelector";

describe("LanguageSelector", () => {
  it("renders without crashing", () => {
    render(<LanguageSelector />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("toggles dropdown on button click", () => {
    render(<LanguageSelector />);
    const button = screen.getByRole("button");
    
    fireEvent.click(button); 
    expect(screen.getByText("French")).toBeInTheDocument();
    expect(screen.getByText("Select new language")).toBeInTheDocument();

    fireEvent.click(button); 
    expect(screen.queryByText("French")).not.toBeInTheDocument();
    expect(screen.queryByText("Select new language")).not.toBeInTheDocument();
  });
});
