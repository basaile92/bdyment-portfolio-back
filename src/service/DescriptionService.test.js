import { afterAll, beforeAll, describe, expect, it, jest, test } from '@jest/globals';
import { DataClient } from '../client/DataClient.js';
import { DescriptionService } from './DescriptionService.js';

const DESCRIPTION = {
  name: 'name1',
  birthday: '1992-12-29',
  job: 'job1',
  linkedin: 'linkedin1',
  github: 'github1',
  presentation: 'presentation1',
};

let descriptionService;
const dataClient = new DataClient();
jest.spyOn(dataClient, 'getDescription').mockImplementation(() => DESCRIPTION);
descriptionService = new DescriptionService(dataClient);

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(1993, 11, 29));
});

afterAll(() => {
  jest.useRealTimers();
});

describe('getDescription', () => {
  it('should return description', async () => {
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
    let result = await descriptionService.getDescription();
    // THEN
    expect(result).toEqual(expected);
  });
});
