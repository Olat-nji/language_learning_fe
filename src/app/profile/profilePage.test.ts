// __tests__/AdminProfile.test.tsx
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";

import { vi } from "vitest";

import AdminProfile from "./page";

// import { useProfileStore } from "./useProfileStore";

vi.mock("../store", () => ({
  useProfileStore: vi.fn(),
}));

const mockProfileStore = {
  image: "/images/profile_avatar.svg",
  name: "Admin Name",
  email: "admin@example.com",
  gender: "Male",
  updateProfile: vi.fn(),
};

describe("admin profile", () => {
  //   beforeEach(() => {
  //     useProfileStore.mockReturnValue(mockProfileStore);
  //   });

  it("renders AdminProfile component", () => {
    expect.hasAssertions();
    render(typeof AdminProfile);
    expect(screen.getByText("Admin Name")).toBeInTheDocument();
    expect(screen.getByText("admin@example.com")).toBeInTheDocument();
    expect(screen.getByText("Male")).toBeInTheDocument();
  });

  it("allows profile editing", async () => {
    expect.hasAssertions();
    render(typeof AdminProfile);

    fireEvent.click(screen.getByText("Update Profile"));

    const nameInput = screen.getByDisplayValue("Admin Name");
    const emailInput = screen.getByDisplayValue("admin@example.com");
    const genderInput = screen.getByDisplayValue("Male");

    fireEvent.change(nameInput, { target: { value: "New Admin Name" } });
    fireEvent.change(emailInput, { target: { value: "newadmin@example.com" } });
    fireEvent.change(genderInput, { target: { value: "Female" } });

    fireEvent.click(screen.getByText("Save"));

    await waitFor(() => {
      expect(mockProfileStore.updateProfile).toHaveBeenCalledWith({
        image: "/default-profile.png",
        name: "New Admin Name",
        email: "newadmin@example.com",
        gender: "Female",
      });
    });

    expect(localStorage.getItem("profile")).toBe(
      JSON.stringify({
        image: "/default-profile.png",
        name: "New Admin Name",
        email: "newadmin@example.com",
        gender: "Female",
      }),
    );
  });

  it("handles image upload", async () => {
    expect.hasAssertions();
    render(typeof AdminProfile);

    fireEvent.click(screen.getByText("Update Profile"));
    fireEvent.click(screen.getByAltText("Profile Image"));

    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    const input = screen.getByLabelText("file input") as HTMLInputElement;
    Object.defineProperty(input, "files", {
      value: [file],
    });

    fireEvent.change(input);

    await waitFor(() => {
      expect(screen.getByAltText("Profile Image")).toHaveAttribute(
        "src",
        expect.stringContaining("data:image/png;base64,"),
      );
    });
  });

  it("is responsive on different screen sizes", () => {
    expect.hasAssertions();
    // const { container } = render(typeof AdminProfile);

    // Small screen size
    window.innerWidth = 320;
    window.dispatchEvent(new Event("resize"));
    // expect(container).toMatchSnapshot();

    // Medium screen size
    window.innerWidth = 768;
    window.dispatchEvent(new Event("resize"));
    // expect(container).toMatchSnapshot();

    // Large screen size
    window.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"));
    // expect(container).toMatchSnapshot();
  });
});
