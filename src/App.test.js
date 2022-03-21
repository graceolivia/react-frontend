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

test('renders graphic', () => {
  render(<App />);
  const isGraphicThere = document.getElementsByClassName("Astronaut");
  expect(isGraphicThere.length).toBe(1);
});

test('renders graphic', () => {
  render(<App />);
  const isTableThere = document.getElementsByTagName("header");
  expect(isTableThere.length).toBe(1);
});



test('fetchJson gets called', () => {
  const spy = jest.spyOn(fetchJson, 'default');
  render(<App />);
  expect(spy).toHaveBeenCalled();
});



// test('data from fetchJson is displayed', () => {
//   const json = "{\"people\": [{\"craft\": \"Rocketship\", \"name\": \"David Bowie\"}], \"message\": \"success\", \"number\": 1}"
//   const jsonJson = JSON.parse(json);
//   const jsonPromise = Promise.resolve(jsonJson)
//   const spy = jest.spyOn(fetchJson, 'default').mockResolvedValue(jsonPromise);

//   render(<App />);
//   expect(spy).toHaveBeenCalled();
//   const calledText = screen.getByText(/Bowie/i);
//   expect(calledText).toBeInTheDocument();
// });


