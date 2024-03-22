import { describe, expect, jest, test } from "@jest/globals";
import { YearUtils } from "./YearUtils.js";

describe("compareItemsByYear", () => {
  test("should return positive value", () => {
    const item1 = { year: "1949" };
    const item2 = { year: "1950" };
    const result = YearUtils.compareItemsByYear(item1, item2);
    expect(result).toBeGreaterThan(0);
  });
  test("should return zero value", () => {
    const item1 = { year: "1949" };
    const item2 = { year: "1949" };
    const result = YearUtils.compareItemsByYear(item1, item2);
    expect(result).toEqual(0);
  });
  test("should return negative value", () => {
    const item1 = { year: "1949" };
    const item2 = { year: "1948" };
    const result = YearUtils.compareItemsByYear(item1, item2);
    expect(result).toBeLessThan(0);
  });
});
describe("compareItemsByStartYearAndEndYearAndIsCurrent", () => {
  test("should return positive value because of start year", () => {
    const item1 = { startYear: "1949", endYear: "1955" };
    const item2 = { startYear: "1950", endYear: "1955" };
    const result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toBeGreaterThan(0);
  });
  test("should return negative value because of start year", () => {
    const item1 = { startYear: "1951", endYear: "1955" };
    const item2 = { startYear: "1950", endYear: "1955" };
    const result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toBeLessThan(0);
  });
  test("should return positive value because of end year", () => {
    const item1 = { startYear: "1941", endYear: "1940", isCurrent: false };
    const item2 = { startYear: "1949", endYear: "1955", isCurrent: false };
    const result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toBeGreaterThan(0);
  });
  test("should return negative value because of end year", () => {
    const item1 = { startYear: "1941", endYear: "1952", isCurrent: false };
    const item2 = { startYear: "1949", endYear: "1930", isCurrent: false };
    const result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toBeLessThan(0);
  });
  test("should return positive value because is current", () => {
    const item1 = { isCurrent: false };
    const item2 = { isCurrent: true };
    const result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toBeGreaterThan(0);
  });
  test("should return negative value because is current", () => {
    const item1 = { isCurrent: true };
    const item2 = { isCurrent: true };
    const result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toBeLessThan(0);
  });
  test("should return 0", () => {
    const item1 = { startYear: "1949", endYear: "1952", isCurrent: false };
    const item2 = { startYear: "1949", endYear: "1952", isCurrent: false };
    const result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toEqual(0);
  });
});
describe("filterItemsByYear", () => {
  test("date between start year and now should return true with is current", () => {
    jest.spyOn(YearUtils, "getCurrentYear").mockImplementation(() => 2024);
    const item = { startYear: "1949", isCurrent: true };

    const result = YearUtils.filterItemsByYear(item, 1995);
    expect(result).toBeTruthy();
  });
  test("date after now should return false with is current", () => {
    jest.spyOn(YearUtils, "getCurrentYear").mockImplementation(() => 2024);
    const item = { startYear: "1949", isCurrent: true };

    const result = YearUtils.filterItemsByYear(item, 2030);
    expect(result).toBeFalsy();
  });
  test("date before staryear should return false", () => {
    jest.spyOn(YearUtils, "getCurrentYear").mockImplementation(() => 2024);
    const item = { startYear: "1949", isCurrent: true };

    const result = YearUtils.filterItemsByYear(item, 1930);
    expect(result).toBeFalsy();
  });
  test("date between start year and end year should return true", () => {
    jest.spyOn(YearUtils, "getCurrentYear").mockImplementation(() => 2024);
    const item = { startYear: "1949", endYear: "2020" };

    const result = YearUtils.filterItemsByYear(item, 1995);
    expect(result).toBeTruthy();
  });
  test("date after end year should return false", () => {
    jest.spyOn(YearUtils, "getCurrentYear").mockImplementation(() => 2024);
    const item = { startYear: "1949", endYear: "2020" };
    const result = YearUtils.filterItemsByYear(item, 2030);
    expect(result).toBeFalsy();
  });
});
describe("getCurrentYear", () => {
  test("should return current year", () => {
    jest.useFakeTimers();
    const expected = 2024;
    jest.setSystemTime(new Date(expected, 11, 30));
    const result = YearUtils.getCurrentYear();
    expect(result).toEqual(expected);
  });
});
