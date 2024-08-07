import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import UserNav from "./UserNav";

describe("UserNav", () => {
  it("renders the UserNav component", () => {
    render(<UserNav />);
    expect(screen.getByAltText("notification-icon")).toBeInTheDocument();
    expect(screen.getByAltText("quest-icon-1")).toBeInTheDocument();
    expect(screen.getByAltText("quest-icon-2")).toBeInTheDocument();
    expect(screen.getByAltText("progress-icon-1")).toBeInTheDocument();
    expect(screen.getByAltText("progress-icon-2")).toBeInTheDocument();
    expect(screen.getByText("Quests")).toBeInTheDocument();
    expect(screen.getByText("Progress")).toBeInTheDocument();
  });

  it("toggles the notifications dropdown", () => {
    render(<UserNav />);
    const notificationIcon = screen.getByAltText("notification-icon");
    fireEvent.click(notificationIcon);
    expect(screen.getByText("Notifications")).toBeInTheDocument();
  });

  it("renders the LanguageSelector", () => {
    render(<UserNav />);
    expect(screen.getByAltText("flag")).toBeInTheDocument();
  });

  it("renders the UserNavDropdown", () => {
    render(<UserNav />);
    expect(screen.getByRole("button", { name: /menu/i })).toBeInTheDocument();
  });
});
