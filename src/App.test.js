import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import * as fetcher from "./fetchJson";


test('renders loading screen', () => {
  render(<App />);
  const loadingText = screen.getByText(/Loading/i);
  expect(loadingText).toBeInTheDocument();
});


test('fetchJson gets called', () => {
  // const json = "{\"people\": [{\"craft\": \"ISS\", \"name\": \"Mark Vande Hei\"}, {\"craft\": \"ISS\", \"name\": \"Pyotr Dubrov\"}, {\"craft\": \"ISS\", \"name\": \"Anton Shkaplerov\"}, {\"craft\": \"Shenzhou 13\", \"name\": \"Zhai Zhigang\"}, {\"craft\": \"Shenzhou 13\", \"name\": \"Wang Yaping\"}, {\"craft\": \"Shenzhou 13\", \"name\": \"Ye Guangfu\"}, {\"craft\": \"ISS\", \"name\": \"Raja Chari\"}, {\"craft\": \"ISS\", \"name\": \"Tom Marshburn\"}, {\"craft\": \"ISS\", \"name\": \"Kayla Barron\"}, {\"craft\": \"ISS\", \"name\": \"Matthias Maurer\"}], \"message\": \"success\", \"number\": 10}";
              
  const spy = jest.spyOn(fetcher, 'fetchJson');
  render(<App />);
  expect(spy).toHaveBeenCalled();
});

