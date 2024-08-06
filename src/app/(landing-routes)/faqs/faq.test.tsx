import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FAQs from './page';

describe('FAQs Page', () => {
  it('renders the FAQ page with header, date, and introduction', () => {
    render(<FAQs />);

    expect(screen.getByText('FAQs')).toBeInTheDocument();
    expect(screen.getByText('Last updated:')).toBeInTheDocument();
    expect(screen.getByText('04 August, 2024')).toBeInTheDocument();

    expect(screen.getByText('Introduction')).toBeInTheDocument();
    expect(screen.getByText("Welcome to our FAQ section! Here, we've compiled answers to some of the most common questions about our AI-powered language learning game. Whether you're just starting or looking for advanced features, we hope this page will help you get the most out of your language learning journey.")).toBeInTheDocument();
  });

  it('expands and collapses FAQ accordion items on click', () => {
    render(<FAQs />);

    const faqItems = screen.getAllByRole('button');

    faqItems.forEach(item => {
      fireEvent.click(item);
      expect(screen.getByText(/The AI adapts to your progress...|Lorem ipsum dolor sit amet.../)).toBeInTheDocument();

      fireEvent.click(item);
      expect(screen.queryByText(/The AI adapts to your progress...|Lorem ipsum dolor sit amet.../)).not.toBeInTheDocument();
    });
  });
});
