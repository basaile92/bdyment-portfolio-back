import { describe, expect, jest, test } from '@jest/globals';
import { HobbiesService } from './HobbiesService.js';
import { JsonPortfolioDataRetriever } from '../../infrastructure/retriever/JsonPortfolioDataRetriever.js';

const HOBBIES = ['hobbies1', 'hobbies2', 'hobbies3'];

let hobbiesService;
const jsonPortfolioDataRetriever = new JsonPortfolioDataRetriever();
jest.spyOn(jsonPortfolioDataRetriever, 'getHobbies').mockImplementation(() => HOBBIES);
hobbiesService = new HobbiesService(jsonPortfolioDataRetriever);

describe('getHobbies', () => {
  test('should return all existing hobbies', () => {
    let expected = HOBBIES;
    let result = hobbiesService.getHobbies();
    expect(result).toEqual(expected);
  });
});
