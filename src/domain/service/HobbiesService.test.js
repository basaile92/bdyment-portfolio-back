import { describe, expect, jest, test } from '@jest/globals';
import { HobbiesService } from './HobbiesService.js';
import { PortfolioDataPort } from '../port/PortfolioDataPort.js';

const HOBBIES = ['hobbies1', 'hobbies2', 'hobbies3'];

let hobbiesService;
const portfolioDataPort = new PortfolioDataPort();
jest.spyOn(portfolioDataPort, 'getHobbies').mockImplementation(() => HOBBIES);
hobbiesService = new HobbiesService(portfolioDataPort);

describe('getHobbies', () => {
  test('should return all existing hobbies', () => {
    let expected = HOBBIES;
    let result = hobbiesService.getHobbies();
    expect(result).toEqual(expected);
  });
});
