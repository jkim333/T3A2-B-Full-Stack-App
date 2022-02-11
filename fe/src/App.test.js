import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, screen, fireEvent, getByText } from "@testing-library/react";
import Navbar from "./components/navbar";
import { fetch_data, fetch_workout, mock_obj } from "./_mocks_/test";

test("renders the Xero fitness brand name", () => {
  render(<Navbar />);
  const element = screen.getByTestId("brandname");
  expect(element).toHaveTextContent("Xero fitness");
});

test("fetches exercise list", async () => {
  expect.assertions(1);

  const results = await fetch_data();
  expect(results).not.toBeUndefined();
});
test("handles error for workout data fetching", async () => {
      await expect(fetch_workout()).rejects.toMatch('error');
 
});

test("object is stringified", () => {
  const json_data = JSON.stringify(mock_obj);
  expect(json_data).toBe(
    `{"exerciseId":1,"exercise":"Abs","activity":"Crunch","weights":10,"reps":12}`
  );
});
