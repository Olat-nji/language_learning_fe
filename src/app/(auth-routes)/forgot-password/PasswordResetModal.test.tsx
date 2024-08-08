import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import PasswordResetModal from "./PasswordResetModal";

describe("passwordResetModal", () => {
  const onClose = vi.fn();
  const onReset = vi.fn();

  it("renders correctly and handles password visibility toggle", () => {
    expect.assertions(6);
    render(<PasswordResetModal onClose={onClose} onReset={onReset} />);

    // Check if the modal is rendered
    expect(screen.getByText(/reset your password/i)).toBeInTheDocument();
    expect(
      screen.getByText(/enter a new password that you can remember/i),
    ).toBeInTheDocument();

    // Check if the password inputs are rendered
    const passwordInput = screen.getByLabelText("New Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm New Password");
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();

    // Simulate entering passwords
    fireEvent.change(passwordInput, { target: { value: "Password1!" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "Password1!" } });

    // Simulate toggling password visibility
    const togglePasswordButton = screen.getAllByRole("button")[0];
    fireEvent.click(togglePasswordButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    const toggleConfirmPasswordButton = screen.getAllByRole("button")[1];
    fireEvent.click(toggleConfirmPasswordButton);
    expect(confirmPasswordInput).toHaveAttribute("type", "text");
  });

  it("displays error messages for invalid passwords", () => {
    expect.assertions(1);
    render(<PasswordResetModal onClose={onClose} onReset={onReset} />);

    const passwordInput = screen.getByLabelText("New Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm New Password");

    fireEvent.change(passwordInput, { target: { value: "short" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "short" } });

    const resetButton = screen.getByText("Reset Password");
    fireEvent.click(resetButton);

    expect(
      screen.getByText(/password must be at least 8 characters long/i),
    ).toBeInTheDocument();
  });

  it("displays error message for mismatched passwords", () => {
    expect.assertions(1);
    render(<PasswordResetModal onClose={onClose} onReset={onReset} />);

    const passwordInput = screen.getByLabelText("New Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm New Password");

    fireEvent.change(passwordInput, { target: { value: "Password1!" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "Different1!" },
    });

    const resetButton = screen.getByText("Reset Password");
    fireEvent.click(resetButton);

    expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
  });

  it("displays success message and calls onReset on successful reset", () => {
    expect.assertions(2);
    render(<PasswordResetModal onClose={onClose} onReset={onReset} />);

    const passwordInput = screen.getByLabelText("New Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm New Password");

    fireEvent.change(passwordInput, { target: { value: "Password1!" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "Password1!" } });

    const resetButton = screen.getByText("Reset Password");
    fireEvent.click(resetButton);

    expect(
      screen.getByText(/password reset successfully! redirecting to login/i),
    ).toBeInTheDocument();
    expect(onReset).toHaveBeenCalledWith();
  });
});
