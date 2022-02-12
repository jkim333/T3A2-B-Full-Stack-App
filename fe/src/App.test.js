import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";
import { fetch_data, fetch_workout, mock_obj } from "./_mocks_/test";
import Home from "./components/home";
import Input from "./components/input";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { handledata } from "./components/exercise";

describe("snapshot testing", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Input />
        </BrowserRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("api sync tests", () => {
  test("fetches exercise list", async () => {
    expect.assertions(1);
    const results = await fetch_data();
    expect(results).not.toBeUndefined();
  });

  test("handles error for workout data fetching", async () => {
    return expect(fetch_workout()).resolves.toBeDefined();
  });
});

describe("function checks", () => {
  test("object is stringified", () => {
    const json_data = JSON.stringify(mock_obj);
    expect(json_data).toBe(
      `{"exerciseId":1,"exercise":"Abs","activity":"Crunch","weights":10,"reps":12}`
    );
  });
  test("no duplication array returned", () => {
    const array = [
      { exercise: "Abs" },
      { exercise: "Abs" },
      { exercise: "Back" },
      { exercise: "Abs" },
      { exercise: "Shoulders" },
    ];
    const new_array = handledata(array);
    expect(new_array).toStrictEqual(["Abs", "Back", "Shoulders"]);
  });
});
