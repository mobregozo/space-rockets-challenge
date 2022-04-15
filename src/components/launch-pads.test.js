import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CustomWrapper } from "../utils/custom-render";
import LaunchPads from "./launch-pads";
import { useSpaceXPaginated } from "../utils/use-space-x";
jest.mock("../utils/use-space-x");

const launchPadsMock = [
  {
    id: 5,
    name: "VAFB SLC 3W",
    status: "retired",
    location: {
      name: "Vandenberg Air Force Base",
      region: "California",
      latitude: 34.6440904,
      longitude: -120.5931438,
    },
    vehicles_launched: ["Falcon 1"],
    attempted_launches: 0,
    successful_launches: 0,
    wikipedia:
      "https://en.wikipedia.org/wiki/Vandenberg_AFB_Space_Launch_Complex_3",
    details:
      "SpaceX original west coast launch pad for Falcon 1. Performed a static fire but was never used for a launch and abandoned due to scheduling conflicts.",
    site_id: "vafb_slc_3w",
    site_name_long: "Vandenberg Air Force Base Space Launch Complex 3W",
  },
  {
    id: 2,
    name: "CCAFS SLC 40",
    status: "active",
    location: {
      name: "Cape Canaveral",
      region: "Florida",
      latitude: 28.5618571,
      longitude: -80.577366,
    },
    vehicles_launched: ["Falcon 9"],
    attempted_launches: 61,
    successful_launches: 59,
    wikipedia:
      "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40",
    details:
      "SpaceX primary Falcon 9 launch pad, where all east coast Falcon 9s launched prior to the AMOS-6 anomaly. Initially used to launch Titan rockets for Lockheed Martin. Back online since CRS-13 on 2017-12-15.",
    site_id: "ccafs_slc_40",
    site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40",
  },
];

describe.only("LaunchPads", () => {
  beforeEach(() => {
    useSpaceXPaginated.mockReturnValue({ data: launchPadsMock });
  });

  test("renders a heading for every launchpad in the list", () => {
    render(<LaunchPads />, { wrapper: CustomWrapper });
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBe(launchPadsMock.length);
  });

  test("renders heading with launchpad name", () => {
    render(<LaunchPads />, { wrapper: CustomWrapper });
    launchPadsMock.forEach((launchpad) => {
      screen.getAllByRole("heading", { name: launchpad.name });
    });
  });
});
