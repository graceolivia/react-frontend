import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import * as fetchJson from "./fetchJson";
import AstronautsTable from './AstronautsTable';


test('renders loading screen', () => {
  render(<App />);
  const loadingText = screen.getByText(/Loading/i);
  expect(loadingText).toBeInTheDocument();
});


test('fetchJson gets called', () => {    
  const spy = jest.spyOn(fetchJson, 'default');
  render(<App />);
  expect(spy).toHaveBeenCalled();
});

