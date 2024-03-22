import { describe, expect, jest, test } from '@jest/globals';
import { AvailabilityService } from './AvailabilityService.js';
import { JsonPortfolioDataRetriever } from '../../infrastructure/retriever/JsonPortfolioDataRetriever.js';

const AVAILABILITY = { date: '1992-12-29' };

let availabilityService;
const jsonPortfolioDataRetriever = new JsonPortfolioDataRetriever();
jest.spyOn(jsonPortfolioDataRetriever, 'getAvailability').mockImplementation(() => AVAILABILITY);
availabilityService = new AvailabilityService(jsonPortfolioDataRetriever);

describe('getAvailability', () => {
  test('should return availability', () => {
    let expected = AVAILABILITY;
    let result = availabilityService.getAvailability();
    expect(result).toEqual(expected);
  });
});
