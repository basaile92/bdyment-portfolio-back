import { describe, expect, jest, test } from '@jest/globals';
import { DataClient } from '../client/DataClient.js';
import { LanguageService } from './LanguageService.js';

const LANGUAGE_1 = {
  name: 'name1',
  level: 'level1',
};
const LANGUAGE_2 = {
  name: 'name2',
  level: 'level2',
};
const LANGUAGE_3 = {
  name: 'name3',
  level: 'level3',
};

const LANGUAGES = [LANGUAGE_1, LANGUAGE_2, LANGUAGE_3];

let languageService;
const dataClient = new DataClient();
jest.spyOn(dataClient, 'getLanguages').mockImplementation(() => LANGUAGES);
languageService = new LanguageService(dataClient);

describe('getLanguages', () => {
  test('should return all existing languages', () => {
    let expected = LANGUAGES;
    let result = languageService.getLanguages();
    expect(result).toEqual(expected);
  });
});
