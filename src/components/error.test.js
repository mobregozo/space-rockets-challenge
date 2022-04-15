import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Error from "./Error";
import { CustomWrapper } from "../utils/custom-render";

describe("Error", () => {
  test("renders the error text message", async () => {
    render(<Error />, { wrapper: CustomWrapper });
    expect(screen.getByText("Problems loading the data")).toBeInTheDocument();
  });
});
