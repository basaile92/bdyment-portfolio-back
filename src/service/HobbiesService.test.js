import { describe, expect, it, jest, test } from '@jest/globals';
import { DataClient } from '../client/DataClient.js';
import { HobbiesService } from './HobbiesService.js';

const HOBBIES = ['hobbies1', 'hobbies2', 'hobbies3'];

let hobbiesService;
const dataClient = new DataClient();
jest.spyOn(dataClient, 'getHobbies').mockImplementation(() => HOBBIES);
hobbiesService = new HobbiesService(dataClient);

describe('getHobbies', () => {
  it('should return all existing hobbies', async () => {
    let expected = HOBBIES;
    let result = await hobbiesService.getHobbies();
    expect(result).toEqual(expected);
  });
});
