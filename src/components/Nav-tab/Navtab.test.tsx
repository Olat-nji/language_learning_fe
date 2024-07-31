// NavTabs.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavTabs from './Navtab';

test('renders NavTabs component with tabs', () => {
  render(<NavTabs />);

  // Check if all tabs are rendered
  expect(screen.getByText('Profile')).toBeInTheDocument();
  expect(screen.getByText('Language')).toBeInTheDocument();
  expect(screen.getByText('Notifications')).toBeInTheDocument();
  expect(screen.getByText('Invite Link')).toBeInTheDocument();
  expect(screen.getByText('Security')).toBeInTheDocument();
});

test('clicking on a tab updates the selected tab', () => {
  render(<NavTabs />);

  // Click on the 'Language' tab
  fireEvent.click(screen.getByText('Language'));

  // Check if 'Language' tab is selected
  expect(screen.getByText('Language')).toHaveClass('bg-secondary-110 text-white border-black');
  // Check if other tabs are not selected
  expect(screen.getByText('Profile')).not.toHaveClass('bg-secondary-110 text-white border-black');
  expect(screen.getByText('Notifications')).not.toHaveClass('bg-secondary-110 text-white border-black');
  expect(screen.getByText('Invite Link')).not.toHaveClass('bg-secondary-110 text-white border-black');
  expect(screen.getByText('Security')).not.toHaveClass('bg-secondary-110 text-white border-black');
});
