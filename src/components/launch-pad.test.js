import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CustomWrapper } from "../utils/custom-render";
import LaunchPad from "./launch-pad";
import { useSpaceX } from "../utils/use-space-x";
jest.mock("../utils/use-space-x");

const launchPadMock = {
  id: 5,
  name: "VAFB SLC 3W",
  status: "retired",
  location: {
    name: "Vandenberg Air Force Base",
    region: "California",
  },
  vehicles_launched: ["Falcon 1"],
  wikipedia:
    "https://en.wikipedia.org/wiki/Vandenberg_AFB_Space_Launch_Complex_3",
  details:
    "SpaceX original west coast launch pad for Falcon 1. Performed a static fire but was never used for a launch and abandoned due to scheduling conflicts.",
};

describe("LaunchPad", () => {
  test("renders the location name of the launchpad", async () => {
    useSpaceX.mockReturnValue({ data: launchPadMock });
    render(<LaunchPad />, { wrapper: CustomWrapper });
    await screen.findByText(launchPadMock.location.name);
  });
});
