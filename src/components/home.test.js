import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Home from "./Home";

describe("Home", () => {
  test("renders the two main routes of the application", async () => {
    render(<Home />, { wrapper: MemoryRouter });
    const items = screen.getAllByRole("link");
    expect(items.length).toBe(2);
  });
});
