import { describe, expect, jest, test } from "@jest/globals";
import { AvailabilityService } from "./AvailabilityService.js";
import { JsonPortfolioDataRetriever } from "../../infrastructure/retriever/JsonPortfolioDataRetriever.js";

const AVAILABILITY = { date: "1992-12-29" };

const jsonPortfolioDataRetriever = new JsonPortfolioDataRetriever();
jest.spyOn(jsonPortfolioDataRetriever, "getAvailability").mockImplementation(() => AVAILABILITY);
const availabilityService = new AvailabilityService(jsonPortfolioDataRetriever);

describe("getAvailability", () => {
  test("should return availability", () => {
    const expected = AVAILABILITY;
    const result = availabilityService.getAvailability();
    expect(result).toEqual(expected);
  });
});
