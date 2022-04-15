import { formatDate } from "./format-date";

describe("formatDate", () => {
  test("formats the date from UTC in ISO8601 to us-US long without the time", async () => {
    const dateFromatted = formatDate("2020-11-21T17:17:00.000Z");
    expect(dateFromatted).toBe("Saturday, November 21, 2020");
  });
});
