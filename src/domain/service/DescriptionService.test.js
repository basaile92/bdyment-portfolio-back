import { afterAll, beforeAll, describe, expect, jest, test } from '@jest/globals';
import { DescriptionService } from './DescriptionService.js';
import { PortfolioDataPort } from '../port/PortfolioDataPort.js';

const DESCRIPTION = {
  name: 'name1',
  birthday: '1992-12-29',
  job: 'job1',
  linkedin: 'linkedin1',
  github: 'github1',
  presentation: 'presentation1',
};

let descriptionService;
const portfolioDataPort = new PortfolioDataPort();
jest.spyOn(portfolioDataPort, 'getDescription').mockImplementation(() => DESCRIPTION);
descriptionService = new DescriptionService(portfolioDataPort);

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(1993, 11, 29));
});

afterAll(() => {
  jest.useRealTimers();
});

describe('getDescription', () => {
  test('should return description', () => {
    // GIVEN
    let expected = {
      name: DESCRIPTION.name,
      age: {
        timeInHour: 8760,
        timeInDay: 365,
        timeInYear: 0,
      },
      job: DESCRIPTION.job,
      linkedin: DESCRIPTION.linkedin,
      github: DESCRIPTION.github,
      presentation: DESCRIPTION.presentation,
    };
    // WHEN
    let result = descriptionService.getDescription();
    // THEN
    expect(result).toEqual(expected);
  });
});
