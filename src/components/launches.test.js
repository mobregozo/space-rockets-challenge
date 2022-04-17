import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CustomWrapper } from "../utils/custom-render";
import Launches from "./launches";
import { useSpaceXPaginated } from "../utils/use-space-x";
import { within } from "@testing-library/dom";
jest.mock("../utils/use-space-x");

const launchesMock = [
  {
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
  },
  {
    flight_number: 107,
    mission_name: "Crew-1",
    mission_id: ["EE86F74"],
    launch_year: "2020",
    launch_date_unix: 1605486420,
    launch_date_utc: "2020-11-16T00:27:00.000Z",
    launch_date_local: "2020-11-15T19:27:00-05:00",
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
            core_serial: "B1061",
            flight: 1,
            block: 5,
            gridfins: true,
            legs: true,
            reused: false,
            land_success: true,
            landing_intent: true,
            landing_type: "ASDS",
            landing_vehicle: "OCISLY",
          },
        ],
      },
      second_stage: {
        block: 5,
        payloads: [
          {
            payload_id: "Crew-1",
            norad_id: [46920],
            cap_serial: "C207",
            reused: false,
            customers: ["NASA (CCtCap)"],
            nationality: "United States",
            manufacturer: "SpaceX",
            payload_type: "Crew Dragon",
            payload_mass_kg: null,
            payload_mass_lbs: null,
            orbit: "ISS",
            orbit_params: {
              reference_system: "geocentric",
              regime: "low-earth",
              longitude: null,
              semi_major_axis_km: 6797.192,
              eccentricity: 0.0001581,
              periapsis_km: 417.982,
              apoapsis_km: 420.132,
              inclination_deg: 51.6442,
              period_min: 92.951,
              lifespan_years: null,
              epoch: "2020-12-20T14:08:30.000Z",
              mean_motion: 15.49203234,
              raan: 146.1501,
              arg_of_pericenter: 146.7873,
              mean_anomaly: 305.4906,
            },
            mass_returned_kg: null,
            mass_returned_lbs: null,
            flight_time_sec: null,
            cargo_manifest: null,
          },
        ],
      },
      fairings: null,
    },
    ships: ["OCISLY"],
    telemetry: { flight_club: null },
    launch_site: {
      site_id: "ksc_lc_39a",
      site_name: "KSC LC 39A",
      site_name_long: "Kennedy Space Center Historic Launch Complex 39A",
    },
    launch_success: true,
    links: {
      mission_patch: "https://i.imgur.com/t5R4BAQ.png",
      mission_patch_small: "https://i.imgur.com/BzaSAnx.png",
      reddit_campaign:
        "https://www.reddit.com/r/spacex/comments/iwb8bl/crew1_launch_campaign_thread/",
      reddit_launch:
        "https://www.reddit.com/r/spacex/comments/ju7fxv/rspacex_crew1_official_launch_coast_docking/",
      reddit_recovery: null,
      reddit_media:
        "https://www.reddit.com/r/spacex/comments/judv0r/rspacex_crew1_media_thread_photographer_contest/",
      presskit: null,
      article_link:
        "https://spaceflightnow.com/2020/11/16/astronauts-ride-spacex-crew-capsule-in-landmark-launch-for-commercial-spaceflight/",
      wikipedia: "https://en.wikipedia.org/wiki/SpaceX_Crew-1",
      video_link: "https://youtu.be/bnChQbxLkkI",
      youtube_id: "bnChQbxLkkI",
      flickr_images: [
        "https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg",
        "https://live.staticflickr.com/65535/50618376731_43ddaab1b8_o.jpg",
        "https://live.staticflickr.com/65535/50618376671_ba4e60af7c_o.jpg",
        "https://live.staticflickr.com/65535/50618376351_ecfdee4ab2_o.jpg",
        "https://live.staticflickr.com/65535/50618727917_01e579c4d9_o.jpg",
        "https://live.staticflickr.com/65535/50618355216_2872d1fe98_o.jpg",
        "https://live.staticflickr.com/65535/50618354801_ff3e722884_o.jpg",
        "https://live.staticflickr.com/65535/50618463487_41642939a4_o.jpg",
        "https://live.staticflickr.com/65535/50617619613_5630422345_o.jpg",
        "https://live.staticflickr.com/65535/50617619668_d680d7319c_o.jpg",
        "https://live.staticflickr.com/65535/50617625523_a7484e0abf_o.jpg",
        "https://live.staticflickr.com/65535/50618469202_fa86f88ab3_o.jpg",
        "https://live.staticflickr.com/65535/50617625183_8554412cee_o.jpg",
        "https://live.staticflickr.com/65535/50618470472_fb8e6507d7_o.jpg",
        "https://live.staticflickr.com/65535/50617626838_c0c71de1f7_o.jpg",
        "https://live.staticflickr.com/65535/50617626738_aa3997aaea_o.jpg",
        "https://live.staticflickr.com/65535/50617626408_fb0bba0f89_o.jpg",
      ],
    },
    details:
      "SpaceX will launch the first operational mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying 3 NASA astronauts and 1 JAXA astronaut to the International Space Station. This mission will be the second crewed flight to launch from the United States since the end of the Space Shuttle program in 2011.",
    upcoming: false,
    static_fire_date_utc: null,
    static_fire_date_unix: null,
    timeline: null,
    crew: [],
    last_date_update: "2020-11-13T21:31:19.000Z",
    last_ll_launch_date: null,
    last_ll_update: null,
    last_wiki_launch_date: "2020-11-16T00:27:00.000Z",
    last_wiki_revision: "90e9da15-25f7-11eb-badd-0e3a392f3e47",
    last_wiki_update: "2020-11-13T21:31:19.000Z",
    launch_date_source: "wiki",
  },
  {
    flight_number: 106,
    mission_name: "GPS III SV04 (Sacagawea)",
    mission_id: [],
    launch_year: "2020",
    launch_date_unix: 1604618640,
    launch_date_utc: "2020-11-05T23:24:00.000Z",
    launch_date_local: "2020-11-05T18:24:00-05:00",
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
            core_serial: "B1062",
            flight: 1,
            block: 5,
            gridfins: true,
            legs: true,
            reused: false,
            land_success: true,
            landing_intent: true,
            landing_type: "ASDS",
            landing_vehicle: "OCISLY",
          },
        ],
      },
      second_stage: {
        block: 5,
        payloads: [
          {
            payload_id: "GPS III SV04 (Sacagawea)",
            norad_id: [],
            reused: false,
            customers: ["United States Space Force"],
            nationality: "United States",
            manufacturer: "Lockheed Martin",
            payload_type: "Satellite",
            payload_mass_kg: 3681,
            payload_mass_lbs: 8115.216,
            orbit: "MEO",
            orbit_params: {
              reference_system: "geocentric",
              regime: "semi-synchronous",
              longitude: null,
              semi_major_axis_km: null,
              eccentricity: null,
              periapsis_km: null,
              apoapsis_km: null,
              inclination_deg: null,
              period_min: null,
              lifespan_years: 15,
              epoch: null,
              mean_motion: null,
              raan: null,
              arg_of_pericenter: null,
              mean_anomaly: null,
            },
          },
        ],
      },
      fairings: {
        reused: null,
        recovery_attempt: null,
        recovered: null,
        ship: null,
      },
    },
    ships: ["OCISLY", "GOQUEST", "HAWK"],
    telemetry: { flight_club: null },
    launch_site: {
      site_id: "ccafs_slc_40",
      site_name: "CCAFS SLC 40",
      site_name_long:
        "Cape Canaveral Air Force Station Space Launch Complex 40",
    },
    launch_success: true,
    links: {
      mission_patch: "https://i.imgur.com/Ehe9AgY.png",
      mission_patch_small: "https://i.imgur.com/Ehe9AgY.png",
      reddit_campaign:
        "https://www.reddit.com/r/spacex/comments/io0swm/gps_iii_sv04_launch_campaign_thread/",
      reddit_launch:
        "https://www.reddit.com/r/spacex/comments/jobxn2/rspacex_gps_iii_sv04_sacagawea_official_launch/",
      reddit_recovery: null,
      reddit_media: null,
      presskit: null,
      article_link:
        "https://spaceflightnow.com/2020/11/06/spacex-launches-gps-navigation-satellite-from-cape-canaveral/",
      wikipedia: "https://en.wikipedia.org/wiki/GPS_Block_III",
      video_link: "https://youtu.be/wufXF5YKR1M",
      youtube_id: "wufXF5YKR1M",
      flickr_images: [],
    },
    details:
      "SpaceX will launch GPS Block III Space Vehicle 04 from SLC-40, Cape Canaveral AFS aboard a Falcon 9. GPS III is owned and operated by the US Air Force and produced by Lockheed Martin. This will be the fourth GPS III satellite launched and the third launched by SpaceX. The satellite will be delivered into a MEO transfer orbit. The booster for this mission will land on an ASDS.",
    upcoming: false,
    static_fire_date_utc: "2020-09-25T05:42:00.000Z",
    static_fire_date_unix: 1601012520,
    timeline: null,
    crew: null,
    last_date_update: "2020-11-02T12:13:58.000Z",
    last_ll_launch_date: null,
    last_ll_update: null,
    last_wiki_launch_date: "2020-11-05T23:24:00.000Z",
    last_wiki_revision: "e21536bf-1d04-11eb-8908-0e0620cee639",
    last_wiki_update: "2020-11-02T12:13:58.000Z",
    launch_date_source: "wiki",
  },
];

describe("Launches", () => {
  beforeEach(() => {
    useSpaceXPaginated.mockReturnValue({ data: launchesMock });
    render(<Launches />, { wrapper: CustomWrapper });
  });

  test("renders a heading for every launch in the list", () => {
    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBe(launchesMock.length);
  });

  test("renders the two img for every launch, the small and big version", () => {
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(launchesMock.length * 2);
  });

  test("renders heading with launch name", () => {
    launchesMock.forEach((launch) => {
      screen.getAllByRole("heading", { name: launch.name });
    });
  });

  test("add one launch to favorites and removes it if pressed again", async () => {
    const firstItem = screen.getByLabelText(
      `flight ${launchesMock[0].flight_number.toString()}`
    );
    const addFavorite = within(firstItem).getByLabelText("Add favorite");

    // Add first launch to favorites
    fireEvent.click(addFavorite);
    const removeFavorite = await within(firstItem).findByLabelText(
      "Remove favorite"
    );
    expect(removeFavorite).toBeInTheDocument();

    // Remove first launch from favorites
    fireEvent.click(removeFavorite);
    expect(
      within(firstItem).getByLabelText("Add favorite")
    ).toBeInTheDocument();
  });
});
