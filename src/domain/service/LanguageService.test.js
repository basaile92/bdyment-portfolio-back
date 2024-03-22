import { describe, expect, jest, test } from '@jest/globals';
import { LanguageService } from './LanguageService.js';
import { PortfolioDataPort } from '../port/PortfolioDataPort.js';

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
const portfolioDataPort = new PortfolioDataPort();
jest.spyOn(portfolioDataPort, 'getLanguages').mockImplementation(() => LANGUAGES);
languageService = new LanguageService(portfolioDataPort);

describe('getLanguages', () => {
  test('should return all existing languages', () => {
    let expected = LANGUAGES;
    let result = languageService.getLanguages();
    expect(result).toEqual(expected);
  });
});
