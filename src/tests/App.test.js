import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import React from "react";
import * as fetchJson from "../components/fetchJson";

test("renders loading screen", () => {
  render(<App />);
  const loadingText = screen.getByText(/Loading/i);
  expect(loadingText).toBeInTheDocument();
});

test("fetchJson gets called", () => {
  const spy = jest.spyOn(fetchJson, "default");
  render(<App />);
  expect(spy).toHaveBeenCalled();
});

test("data from fetchJson is displayed", async () => {
  const jsonString =
    '{"people": [{"craft": "Rocketship", "name": "David Bowie"}], "message": "success", "number": 1}';
  const jsonObject = JSON.parse(jsonString);
  const jsonPromise = Promise.resolve(jsonObject);
  const spy = jest.spyOn(fetchJson, "default").mockResolvedValue(jsonPromise);

  render(<App />);
  expect(spy).toHaveBeenCalled();
  const calledText = await screen.findByText(/Bowie/i);
  await waitFor(() => {
    expect(calledText).toBeInTheDocument();
  });
});

test("table header is rendered", async () => {
  const jsonString =
    '{"people": [{"craft": "Rocketship", "name": "David Bowie"}], "message": "success", "number": 1}';
  const jsonObject = JSON.parse(jsonString);
  const jsonPromise = Promise.resolve(jsonObject);
  const spy = jest.spyOn(fetchJson, "default").mockResolvedValue(jsonPromise);

  render(<App />);
  expect(spy).toHaveBeenCalled();
  await waitFor(() => {
    const isTableThere = document.getElementsByTagName("thead");
    expect(isTableThere.length).toBe(1);
  });
});
