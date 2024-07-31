// ButtonGrid.test.tsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonGrid from './ButtonGrid'; // Adjust the import path as necessary

test('renders ButtonGrid component without crashing', () => {
  render(<ButtonGrid />);
  // Check if one of the buttons is in the document
  const buttonElement = screen.getByTestId('button-1'); // Check for the first button
  expect(buttonElement).toBeInTheDocument();
});
