import { describe, expect, jest, test } from '@jest/globals';
import { DataClient } from '../client/DataClient.js';
import { HobbiesService } from './HobbiesService.js';

const HOBBIES = ['hobbies1', 'hobbies2', 'hobbies3'];

let hobbiesService;
const dataClient = new DataClient();
jest.spyOn(dataClient, 'getHobbies').mockImplementation(() => HOBBIES);
hobbiesService = new HobbiesService(dataClient);

describe('getHobbies', () => {
  test('should return all existing hobbies', () => {
    let expected = HOBBIES;
    let result = hobbiesService.getHobbies();
    expect(result).toEqual(expected);
  });
});
