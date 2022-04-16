import { formatDate, formatDateTimeOffset } from "./format-date";

describe("format date utils", () => {
  describe("formatDate", () => {
    test("formats the date from UTC in ISO8601 to us-US long without the time", async () => {
      const dateFromatted = formatDate("2020-11-21T17:17:00.000Z");
      expect(dateFromatted).toBe("Saturday, November 21, 2020");
    });
  });

  describe("formatDateTimeOffset", () => {
    test("formats the date from UTC in ISO8601 to us-US including the offset - negative offset", async () => {
      const dateFromatted = formatDateTimeOffset("2020-11-21T09:17:00-08:00");
      expect(dateFromatted).toBe("November 21, 2020, 9:17:00 AM UTC -08:00");
    });

    test("formats the date from UTC in ISO8601 to us-US including the offset - positive offset", async () => {
      const dateFromatted = formatDateTimeOffset("2006-03-25T10:30:00+12:00");
      expect(dateFromatted).toBe("March 25, 2006, 10:30:00 AM UTC +12:00");
    });

    test("formats the date from UTC in ISO8601 to us-US including the offset - zero offset", async () => {
      const dateFromatted = formatDateTimeOffset("2006-03-25T10:30:00+00:00");
      expect(dateFromatted).toBe("March 25, 2006, 10:30:00 AM UTC +00:00");
    });
  });
});