import React from "react";
import App from "./App";
import { render, screen} from "@testing-library/react";
import Navbar from "./components/navbar";
import { fetch_data, fetch_workout, mock_obj } from "./_mocks_/test";


describe('text matching', () => {
test("renders the Xero fitness brand name", () => {
  const { getByTestId} = render(<App/>);
  expect(getByTestId("start-workout")).toBeInTheDocument();
});
});

test("fetches exercise list", async () => {
  expect.assertions(1);
  const results = await fetch_data();
  expect(results).not.toBeUndefined();
});

test("handles error for workout data fetching", async () => {
      return expect(fetch_workout()).resolves.toBeDefined();
 
});

test("object is stringified", () => {
  const json_data = JSON.stringify(mock_obj);
  expect(json_data).toBe(
    `{"exerciseId":1,"exercise":"Abs","activity":"Crunch","weights":10,"reps":12}`
  );
});
