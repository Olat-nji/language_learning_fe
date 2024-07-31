import { render, screen } from "@testing-library/react";

import SearchIcon from "~/components/common/searchbar/SearchIcon";

describe("searchIcon", () => {
  it("renders search icon buttons", () => {
    expect.assertions(2);

    render(<SearchIcon />);

    const searchButtons = screen.getAllByRole("button");
    expect(searchButtons).toHaveLength(1);

    for (const button of searchButtons) {
      expect(button).toContainElement(screen.getByTestId("search-icon"));
    }
  });
});
