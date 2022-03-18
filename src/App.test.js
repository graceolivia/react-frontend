import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import * as fetcher from "./fetchJson";


test('renders loading screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});


test('fetchJson gets called', () => {
  jest.spyOn(fetcher, 'determineDateByDaysFromNow').mockReturnValue('12/31/19');
  render(<App />);
  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});

