import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CustomWrapper } from "../utils/custom-render";
import FavoritesSideBar from "./favorites-sidebar";
jest.mock("../utils/use-space-x");

describe("FavoritesSideBar", () => {
  test("not display the side bar if it wasn't opened", () => {
    render(<FavoritesSideBar isOpen={false} />, { wrapper: CustomWrapper });
    expect(
      screen.queryByRole("dialog", { name: "Favorites" })
    ).not.toBeInTheDocument();
  });

  test("display the dialog with the favorites", () => {
    render(<FavoritesSideBar isOpen={true} />, { wrapper: CustomWrapper });
    screen.getByRole("dialog", { name: "Favorites" });
  });
});
