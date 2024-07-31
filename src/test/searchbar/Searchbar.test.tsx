import { render, screen } from "@testing-library/react";

import SearchBar from "~/components/common/searchbar/Searchbar";

describe("searchBar", () => {
  it("renders search bar component", () => {
    expect.hasAssertions();

    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText("Search anything here...");
    expect(inputElement).toBeInTheDocument();

    const commandKeyElement = screen.getByText("⌘");
    const kKeyElement = screen.getByText("K");
    expect(commandKeyElement).toBeInTheDocument();
    expect(kKeyElement).toBeInTheDocument();
  });
});
