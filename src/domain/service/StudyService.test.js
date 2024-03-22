import { describe, expect, jest, test } from '@jest/globals';
import { StudyService } from './StudyService.js';
import { PortfolioDataPort } from '../port/PortfolioDataPort.js';
import { YearUtils } from '../utils/YearUtils.js';

const YEAR_TO_SEARCH = 2000;
const STUDY_1 = {
  label: 'label1',
  place: 'place1',
  school: 'school1',
  startYear: 2016,
  endYear: 2018,
  diploma: 'diploma1',
  degree: 'degree1',
  isCurrent: false,
};
const STUDY_2 = {
  label: 'label2',
  place: 'place2',
  school: 'school2',
  startYear: 2010,
  endYear: 2016,
  diploma: 'diploma2',
  degree: 'degree2',
  isCurrent: false,
};
const STUDIES = [STUDY_1, STUDY_2];

let compareItemsSpy, filterItemsByYear, studyService;
const portfolioDataPort = new PortfolioDataPort();
jest.spyOn(portfolioDataPort, 'getStudies').mockImplementation(() => STUDIES);
compareItemsSpy = jest.spyOn(YearUtils, 'compareItemsByStartYearAndEndYearAndIsCurrent').mockImplementation(() => 1);
filterItemsByYear = jest.spyOn(YearUtils, 'filterItemsByYear').mockImplementation((item, year) => true);
studyService = new StudyService(portfolioDataPort);

describe('getStudies', () => {
  test('should return all existing studies in the right order', () => {
    let expected = STUDIES;
    let result = studyService.getStudies();
    expect(result).toEqual(expected);
  });
});

describe('getStudiesByYear', () => {
  test('should return all the studies by year in the right order', () => {
    let year = YEAR_TO_SEARCH;
    let expected = STUDIES;
    let result = studyService.getStudiesByYear({}, { year });
    expect(result).toEqual(expected);
  });
});
