import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CustomWrapper } from "../utils/custom-render";
import LaunchPad from "./launch";
import { useSpaceX } from "../utils/use-space-x";
jest.mock("../utils/use-space-x");

const launch = {
  flight_number: 108,
  mission_name: "Sentinel-6 Michael Freilich",
  mission_id: [],
  launch_year: "2020",
  launch_date_unix: 1605979020,
  launch_date_utc: "2020-11-21T17:17:00.000Z",
  launch_date_local: "2020-11-21T09:17:00-08:00",
  is_tentative: false,
  tentative_max_precision: "hour",
  tbd: false,
  launch_window: null,
  rocket: {
    rocket_id: "falcon9",
    rocket_name: "Falcon 9",
    rocket_type: "FT",
    first_stage: {
      cores: [
        {
          core_serial: "B1063",
          flight: 1,
          block: 5,
          gridfins: true,
          legs: true,
          reused: false,
          land_success: true,
          landing_intent: true,
          landing_type: "RTLS",
          landing_vehicle: "LZ-4",
        },
      ],
    },
    second_stage: {
      block: 5,
      payloads: [
        {
          payload_id: "Sentinel-6 Michael Freilich",
          norad_id: [46984],
          reused: false,
          customers: ["NASA"],
          nationality: "United States",
          manufacturer: "EUMETSAT",
          payload_type: "Satellite",
          payload_mass_kg: 1440,
          payload_mass_lbs: 3174.657,
          orbit: "PO",
          orbit_params: {
            reference_system: "geocentric",
            regime: "low-earth",
            longitude: null,
            semi_major_axis_km: 7715.87,
            eccentricity: 0.0007839,
            periapsis_km: 1331.686,
            apoapsis_km: 1343.783,
            inclination_deg: 66.0475,
            period_min: 112.418,
            lifespan_years: 25,
            epoch: "2020-12-21T06:24:02.000Z",
            mean_motion: 12.80929933,
            raan: 337.2491,
            arg_of_pericenter: 266.7039,
            mean_anomaly: 93.2975,
          },
        },
      ],
    },
    fairings: {
      reused: null,
      recovery_attempt: false,
      recovered: null,
      ship: null,
    },
  },
  ships: [],
  telemetry: { flight_club: null },
  launch_site: {
    site_id: "vafb_slc_4e",
    site_name: "VAFB SLC 4E",
    site_name_long: "Vandenberg Air Force Base Space Launch Complex 4E",
  },
  launch_success: true,
  links: {
    mission_patch: null,
    mission_patch_small: null,
    reddit_campaign:
      "https://www.reddit.com/r/spacex/comments/jkk93v/sentinel6_michael_freilich_launch_campaign_thread/",
    reddit_launch:
      "https://www.reddit.com/r/spacex/comments/jxsche/rspacex_sentinel6_official_launch_discussion/",
    reddit_recovery: null,
    reddit_media:
      "https://www.reddit.com/r/spacex/comments/jyd67q/rspacex_sentinel6_media_thread_photographer/",
    presskit: null,
    article_link:
      "https://spaceflightnow.com/2020/11/21/international-satellite-launches-to-extend-measurements-of-sea-level-rise/",
    wikipedia: "https://en.wikipedia.org/wiki/Sentinel-6_Michael_Frielich",
    video_link: "https://youtu.be/aVFPzTDCihQ",
    youtube_id: "aVFPzTDCihQ",
    flickr_images: [
      "https://live.staticflickr.com/65535/50630802488_8cc373728e_o.jpg",
      "https://live.staticflickr.com/65535/50631642722_3af8131c6f_o.jpg",
      "https://live.staticflickr.com/65535/50631544171_66bd43eaa9_o.jpg",
      "https://live.staticflickr.com/65535/50631543966_e8035d5cca_o.jpg",
      "https://live.staticflickr.com/65535/50631643257_c214ceee7b_o.jpg",
      "https://live.staticflickr.com/65535/50631643917_cb7db291d0_o.jpg",
    ],
  },
  details:
    "SpaceX will launch Sentinel-6 Michael Freilich into low Earth orbit for NASA, NOAA, ESA, and the European Organization for the Exploitation of Meteorological Satellites aboard a Falcon 9 from SLC-4E, Vandenberg Air Force Station. Sentinel-6(A) is an ocean observation satellite providing radar ocean surface altimetry data and also atmospheric temperature profiles as a secondary mission. The booster for this mission is will land at LZ-4.",
  upcoming: false,
  static_fire_date_utc: "2020-11-17T13:17:00.000Z",
  static_fire_date_unix: 1605619020,
  timeline: null,
  crew: null,
  last_date_update: "2020-11-17T19:27:21.000Z",
  last_ll_launch_date: "2020-11-21T17:17:00.000Z",
  last_ll_update: "2020-11-05T23:48:07.000Z",
  last_wiki_launch_date: "2020-11-21T17:17:00.000Z",
  last_wiki_revision: "e93220d1-290a-11eb-bd82-0e4885cc0cd7",
  last_wiki_update: "2020-11-17T19:27:21.000Z",
  launch_date_source: "wiki",
};

describe("Launch", () => {
  beforeEach(() => {
    useSpaceX.mockReturnValue({ data: launch });
    render(<LaunchPad />, { wrapper: CustomWrapper });
  });

  test("renders the name of the mission", () => {
    expect(screen.getByText(launch.mission_name)).toBeInTheDocument();
  });

  test("renders the main image and the gallery with all the images", () => {
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(launch.links.flickr_images.length + 1);
  });

  test("renders the tooltip only when user hovers the local lauch date", async () => {
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();

    fireEvent.mouseOver(screen.getByLabelText("local launch time"));
    const tooltip = await screen.findByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
  });

  test("add launch to favorite if the star button is pressed, and removes it if pressed again", async () => {
    expect(screen.queryByLabelText("Remove favorite")).not.toBeInTheDocument();

    // Add item to favorites
    fireEvent.click(screen.getByLabelText("Add favorite"));
    const removeFavorite = await screen.findByLabelText("Remove favorite");
    expect(removeFavorite).toBeInTheDocument();

    // Remove item from favorites
    fireEvent.click(removeFavorite); 
    expect(screen.getByLabelText("Add favorite")).toBeInTheDocument();
  });
});
