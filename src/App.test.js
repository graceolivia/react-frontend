import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'


test('renders table craft header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Craft/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders table name header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
});
