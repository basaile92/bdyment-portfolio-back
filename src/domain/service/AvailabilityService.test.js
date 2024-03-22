import { describe, expect, jest, test } from '@jest/globals';
import { AvailabilityService } from './AvailabilityService.js';
import { PortfolioDataPort } from '../port/PortfolioDataPort.js';

const AVAILABILITY = { date: '1992-12-29' };

let availabilityService;
const portfolioDataPort = new PortfolioDataPort();
jest.spyOn(portfolioDataPort, 'getAvailability').mockImplementation(() => AVAILABILITY);
availabilityService = new AvailabilityService(portfolioDataPort);

describe('getAvailability', () => {
  test('should return availability', () => {
    let expected = AVAILABILITY;
    let result = availabilityService.getAvailability();
    expect(result).toEqual(expected);
  });
});
