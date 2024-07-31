import { fireEvent, render, screen } from "@testing-library/react";
import { Mail } from "lucide-react"; // Example icon, replace with actual icon if different
import { describe, expect, it } from "vitest";

import CustomInput from "~/components/input/CustomInput";

describe("customInput Component", () => {
  it("renders the CustomInput component", () => {
    expect.hasAssertions();
    render(
      <CustomInput
        placeholder="Enter Your Email"
        Icon={Mail}
        onChange={() => {}}
        error=""
        label="Email address"
        inputType="text"
        name="email"
        className=""
        value=""
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter Your Email");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders the input with the correct placeholder", () => {
    expect.hasAssertions();
    const placeholder = "Enter Your Email";
    render(
      <CustomInput
        placeholder={placeholder}
        Icon={Mail}
        onChange={() => {}}
        error=""
        label="Email address"
        inputType="text"
        name="email"
        className=""
        value=""
      />,
    );
    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  it("calls onChange handler when input value changes", () => {
    expect.hasAssertions();
    const handleChange = vi.fn();
    render(
      <CustomInput
        placeholder="Enter Your Email"
        Icon={Mail}
        onChange={handleChange}
        error=""
        label="Email address"
        inputType="text"
        name="email"
        className=""
        value=""
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter Your Email");
    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("displays an error message", () => {
    expect.hasAssertions();
    const error = "This field is required.";
    render(
      <CustomInput
        placeholder="Enter Your Email"
        Icon={Mail}
        onChange={() => {}}
        error={error}
        label="Email address"
        inputType="text"
        name="email"
        className=""
        value=""
      />,
    );
    const errorMessage = screen.getByText(error);
    expect(errorMessage).toBeInTheDocument();
  });

  it("renders the input with the correct label", () => {
    expect.hasAssertions();
    const label = "Email address";
    render(
      <CustomInput
        placeholder="Enter Your Email"
        Icon={Mail}
        onChange={() => {}}
        error=""
        label={label}
        inputType="text"
        name="email"
        className=""
        value=""
      />,
    );
    const labelElement = screen.getByText(label);
    expect(labelElement).toBeInTheDocument();
  });

  it("renders with the correct input type", () => {
    expect.hasAssertions();
    const inputType = "password";
    render(
      <CustomInput
        placeholder="Enter Your Password"
        Icon={Mail}
        onChange={() => {}}
        error=""
        label="Password"
        inputType={inputType}
        name="password"
        className=""
        value=""
      />,
    );
    const inputElement = screen.getByPlaceholderText("Enter Your Password");
    expect(inputElement).toHaveAttribute("type", inputType);
  });

  it("renders an icon if provided", () => {
    expect.hasAssertions();
    render(
      <CustomInput
        placeholder="Enter Your Email"
        Icon={Mail}
        onChange={() => {}}
        error=""
        label="Email address"
        inputType="text"
        name="email"
        className=""
        value=""
      />,
    );
    const iconElement = screen.getByTestId("custom-icon");
    expect(iconElement).toBeInTheDocument();
  });
});
