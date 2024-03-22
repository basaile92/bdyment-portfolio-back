import { describe, expect, jest, test } from '@jest/globals';
import { YearUtils } from './YearUtils.js';

describe('compareItemsByYear', () => {
  test('should return positive value', () => {
    let item1 = { year: '1949' };
    let item2 = { year: '1950' };
    let result = YearUtils.compareItemsByYear(item1, item2);
    expect(result).toBeGreaterThan(0);
  });
  test('should return zero value', () => {
    let item1 = { year: '1949' };
    let item2 = { year: '1949' };
    let result = YearUtils.compareItemsByYear(item1, item2);
    expect(result).toEqual(0);
  });
  test('should return negative value', () => {
    let item1 = { year: '1949' };
    let item2 = { year: '1948' };
    let result = YearUtils.compareItemsByYear(item1, item2);
    expect(result).toBeLessThan(0);
  });
});
describe('compareItemsByStartYearAndEndYearAndIsCurrent', () => {
  test('should return positive value because of start year', () => {
    let item1 = { startYear: '1949', endYear: '1955' };
    let item2 = { startYear: '1950', endYear: '1955' };
    let result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toBeGreaterThan(0);
  });
  test('should return negative value because of start year', () => {
    let item1 = { startYear: '1951', endYear: '1955' };
    let item2 = { startYear: '1950', endYear: '1955' };
    let result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toBeLessThan(0);
  });
  test('should return positive value because of end year', () => {
    let item1 = { startYear: '1941', endYear: '1940', isCurrent: false };
    let item2 = { startYear: '1949', endYear: '1955', isCurrent: false };
    let result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toBeGreaterThan(0);
  });
  test('should return negative value because of end year', () => {
    let item1 = { startYear: '1941', endYear: '1952', isCurrent: false };
    let item2 = { startYear: '1949', endYear: '1930', isCurrent: false };
    let result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toBeLessThan(0);
  });
  test('should return positive value because is current', () => {
    let item1 = { isCurrent: false };
    let item2 = { isCurrent: true };
    let result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toBeGreaterThan(0);
  });
  test('should return negative value because is current', () => {
    let item1 = { isCurrent: true };
    let item2 = { isCurrent: true };
    let result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toBeLessThan(0);
  });
  test('should return 0', () => {
    let item1 = { startYear: '1949', endYear: '1952', isCurrent: false };
    let item2 = { startYear: '1949', endYear: '1952', isCurrent: false };
    let result = YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent(item1, item2);
    expect(result).toEqual(0);
  });
});
describe('filterItemsByYear', () => {
  test('date between start year and now should return true with is current', () => {
    jest.spyOn(YearUtils, 'getCurrentYear').mockImplementation(() => 2024);
    let item = { startYear: '1949', isCurrent: true };

    let result = YearUtils.filterItemsByYear(item, 1995);
    expect(result).toBeTruthy();
  });
  test('date after now should return false with is current', () => {
    jest.spyOn(YearUtils, 'getCurrentYear').mockImplementation(() => 2024);
    let item = { startYear: '1949', isCurrent: true };

    let result = YearUtils.filterItemsByYear(item, 2030);
    expect(result).toBeFalsy();
  });
  test('date before staryear should return false', () => {
    jest.spyOn(YearUtils, 'getCurrentYear').mockImplementation(() => 2024);
    let item = { startYear: '1949', isCurrent: true };

    let result = YearUtils.filterItemsByYear(item, 1930);
    expect(result).toBeFalsy();
  });
  test('date between start year and end year should return true', () => {
    jest.spyOn(YearUtils, 'getCurrentYear').mockImplementation(() => 2024);
    let item = { startYear: '1949', endYear: '2020' };

    let result = YearUtils.filterItemsByYear(item, 1995);
    expect(result).toBeTruthy();
  });
  test('date after end year should return false', () => {
    jest.spyOn(YearUtils, 'getCurrentYear').mockImplementation(() => 2024);
    let item = { startYear: '1949', endYear: '2020' };
    let result = YearUtils.filterItemsByYear(item, 2030);
    expect(result).toBeFalsy();
  });
});
describe('getCurrentYear', () => {
  test('should return current year', () => {
    jest.useFakeTimers();
    let expected = 2024;
    jest.setSystemTime(new Date(expected, 11, 30));
    let result = YearUtils.getCurrentYear();
    expect(result).toEqual(expected);
  });
});
