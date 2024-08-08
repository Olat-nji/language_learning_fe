import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ForgotPassword from "./page";
import '@testing-library/jest-dom/extend-expect';

// Mock the child components to avoid needing their implementation details
jest.mock('./Modal', () => ({
  __esModule: true,
  default: ({ email, onVerify }: { email: string; onVerify: () => void }) => (
    <div>
      Mock Modal
      <button onClick={onVerify}>Verify</button>
    </div>
  ),
}));

jest.mock('./PasswordResetModal', () => ({
  __esModule: true,
  default: ({ onClose, onReset }: { onClose: () => void; onReset: () => void }) => (
    <div>
      Mock Password Reset Modal
      <button onClick={onClose}>Close</button>
      <button onClick={onReset}>Reset</button>
    </div>
  ),
}));

jest.mock('./VerifyEmailModal', () => ({
  __esModule: true,
  default: ({ email, onClose, onVerifyComplete }: { email: string; onClose: () => void; onVerifyComplete: () => void }) => (
    <div>
      Mock Verify Email Modal
      <button onClick={onClose}>Close</button>
      <button onClick={onVerifyComplete}>Verify Complete</button>
    </div>
  ),
}));

jest.mock('./PasswordResetConfirmation', () => ({
  __esModule: true,
  default: ({ onClose }: { onClose: () => void }) => (
    <div>
      Mock Password Reset Confirmation
      <button onClick={onClose}>Close</button>
    </div>
  ),
}));

describe("ForgotPassword", () => {
  test("renders correctly and handles all modal interactions", async () => {
    render(<ForgotPassword />);

    // Check initial render
    expect(screen.getByText(/Forgot Password\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Enter the email address/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/johndoe@gmail.com/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Send Instructions/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Return to Sign In/i })).toBeInTheDocument();

    // Submit the email form
    fireEvent.change(screen.getByPlaceholderText(/johndoe@gmail.com/i), { target: { value: 'test@example.com' } });
    fireEvent.click(screen.getByRole('button', { name: /Send Instructions/i }));

    // Expect the email sent modal to be rendered
    await waitFor(() => expect(screen.getByText(/Mock Modal/i)).toBeInTheDocument());
    fireEvent.click(screen.getByRole('button', { name: /Verify/i }));

    // Expect the verify email modal to be rendered
    await waitFor(() => expect(screen.getByText(/Mock Verify Email Modal/i)).toBeInTheDocument());
    fireEvent.click(screen.getByRole('button', { name: /Verify Complete/i }));

    // Expect the password reset modal to be rendered
    await waitFor(() => expect(screen.getByText(/Mock Password Reset Modal/i)).toBeInTheDocument());
    fireEvent.click(screen.getByRole('button', { name: /Reset/i }));

    // Expect the password reset confirmation modal to be rendered
    await waitFor(() => expect(screen.getByText(/Mock Password Reset Confirmation/i)).toBeInTheDocument());
    fireEvent.click(screen.getByRole('button', { name: /Close/i }));

    // Ensure modals close correctly
    await waitFor(() => expect(screen.queryByText(/Mock Password Reset Confirmation/i)).not.toBeInTheDocument());
  });
});
