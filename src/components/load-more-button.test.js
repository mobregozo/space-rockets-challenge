import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CustomWrapper } from "../utils/custom-render";
import LoadMoreButton from "./load-more-button";

describe("LoadMoreButton", () => {
  test("renders the show more button", () => {
    render(<LoadMoreButton />, { wrapper: CustomWrapper });
    screen.getByText("Show more...");
  });

  test("renders the loading text and not the 'show more' button when loading more elements", () => {
    render(<LoadMoreButton isLoadingMore={true} />, { wrapper: CustomWrapper });
    screen.getByText("Loading...");
    const showMoreButton = screen.queryByText("Show more...");
    expect(showMoreButton).not.toBeInTheDocument();
  });
});
