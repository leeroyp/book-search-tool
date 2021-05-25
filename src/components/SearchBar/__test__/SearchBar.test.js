import React from "react";
import SearchBar from "../SearchBar";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
  const component = render(<SearchBar />);
  getByTestId = component.getByTestId;
});

test("making sure subheader is correct", () => {
  const subheaderEl = getByTestId("subheader");

  expect(subheaderEl.textContent).toBe("Search for Books by title");
});

test("search bar value is blank", () => {
  const searchEl = getByTestId("search-bar");

  expect(searchEl.value).toBe("");
});

test("changing value in search bar works correctly", () => {
  const searchEl = getByTestId("search-bar");

  expect(searchEl.value).toBe("");

  fireEvent.change(searchEl, {
    target: {
      value: "lord of the rings",
    },
  });

  expect(searchEl.value).toBe("lord of the rings");

  fireEvent.change(searchEl, {
    target: {
      value: "harry potter",
    },
  });

  expect(searchEl.value).toBe("harry potter");
});

test("search book button renders with search book name", () => {
  const buttonEl = getByTestId("search-button");

  expect(buttonEl.textContent).toBe("Search Book");
});
