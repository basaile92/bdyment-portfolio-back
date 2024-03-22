import { describe, expect, jest, test } from '@jest/globals';
import { MissionService } from './MissionService.js';
import { PortfolioDataPort } from '../port/PortfolioDataPort.js';
import { YearUtils } from '../utils/YearUtils.js';

const YEAR_TO_SEARCH = 2020;
const SKILL_TO_SEARCH = 'skill00';
const MISSION_1 = {
  company: 'company1',
  websites: ['website00', 'website01', 'website02'],
  place: 'place1',
  role: 'role1',
  description: 'description1',
  startYear: 2023,
  endYear: 2024,
  skills: [
    {
      name: SKILL_TO_SEARCH,
      category: 'category00',
    },
    {
      name: 'skill01',
      category: 'category01',
    },
    {
      name: 'skill02',
      category: 'category02',
    },
  ],
  isCurrent: false,
};
const MISSION_2 = {
  company: 'company2',
  websites: ['website10', 'website11', 'website12'],
  place: 'place2',
  role: 'role2',
  description: 'description2',
  startYear: 2020,
  endYear: 2023,
  skills: [
    {
      name: SKILL_TO_SEARCH,
      category: 'category00',
    },
    {
      name: 'skill11',
      category: 'category11',
    },
    {
      name: 'skill12',
      category: 'category12',
    },
  ],
  isCurrent: false,
};
const MISSION_3 = {
  company: 'company3',
  websites: ['website20', 'website21', 'website22'],
  place: 'place3',
  role: 'role3',
  description: 'description3',
  startYear: 2015,
  endYear: 2020,
  skills: [
    {
      name: 'skill20',
      category: 'category20',
    },
    {
      name: 'skill21',
      category: 'category21',
    },
    {
      name: 'skill22',
      category: 'category22',
    },
  ],
  isCurrent: false,
};
const MISSIONS = [MISSION_1, MISSION_2, MISSION_3];

let compareItemsSpy, filterItemsByYear, missionService;
const portfolioDataPort = new PortfolioDataPort();
jest.spyOn(portfolioDataPort, 'getMissions').mockImplementation(() => MISSIONS);
compareItemsSpy = jest.spyOn(YearUtils, 'compareItemsByStartYearAndEndYearAndIsCurrent').mockImplementation(() => 1);
filterItemsByYear = jest.spyOn(YearUtils, 'filterItemsByYear').mockImplementation((item, year) => true);
missionService = new MissionService(portfolioDataPort);

describe('getMissions', () => {
  test('should return all existing missions in the right order', () => {
    let expected = MISSIONS;
    let result = missionService.getMissions();
    expect(result).toEqual(expected);
  });
});

describe('getMissionsBySkill', () => {
  test('should return all the missions by skill in the right order', () => {
    let skillName = SKILL_TO_SEARCH;
    let expected = [MISSION_1, MISSION_2];
    let result = missionService.getMissionsBySkill({}, { skillName });
    expect(result).toEqual(expected);
  });
});

describe('getMissionsByYear', () => {
  test('should return all the missions by year in the right order', () => {
    let year = YEAR_TO_SEARCH;
    let expected = MISSIONS;
    let result = missionService.getMissionsByYear({}, { year });
    expect(result).toEqual(expected);
  });
});
