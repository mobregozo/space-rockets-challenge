import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Breadcrumbs from "./Breadcrumbs";
import { MemoryRouter } from "react-router-dom";

const mockItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Launches",
  },
];
describe("Breadcrumbs", () => {
  test("renders the items from the props in the breadcrumb", async () => {
    render(<Breadcrumbs items={mockItems} />, { wrapper: MemoryRouter });
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(mockItems.length);
  });
});
