import React from "react";
import { render, screen } from "@testing-library/react";
import { CustomWrapper } from "../utils/custom-render";
import "@testing-library/jest-dom";
import App from "./app";

describe("App", () => {
  test("display navigation name at the top", async () => {
    render(<App />, { wrapper: CustomWrapper });
    expect(screen.getByRole("navigation")).toHaveTextContent("¡SPACE·R0CKETS!");
  });
});
