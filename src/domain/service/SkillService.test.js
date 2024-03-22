import { describe, expect, jest, test } from '@jest/globals';
import { SkillService } from './SkillService.js';
import { PortfolioDataPort } from '../port/PortfolioDataPort.js';

const YEAR_TO_SEARCH = 2020;
const CATEGORY_TO_SEARCH = 'category00';

const skill0 = {
  name: 'skill00',
  category: CATEGORY_TO_SEARCH,
};
const skill1 = {
  name: 'skill01',
  category: 'category01',
};
const skill2 = {
  name: 'skill02',
  category: CATEGORY_TO_SEARCH,
};
const skill3 = {
  name: 'skill11',
  category: 'category11',
};
const skill4 = {
  name: 'skill12',
  category: 'category12',
};
const skill5 = {
  name: 'skill20',
  category: CATEGORY_TO_SEARCH,
};
const skill6 = {
  name: 'skill21',
  category: 'category21',
};
const skill7 = {
  name: 'skill22',
  category: 'category22',
};
const PROJECT_1 = {
  name: 'name1',
  websites: ['website00', 'website01', 'website02'],
  role: 'role1',
  description: 'description1',
  startYear: 2023,
  endYear: 2024,
  skills: [skill0, skill1, skill2],
  isCurrent: false,
};
const PROJECT_2 = {
  name: 'name2',
  websites: ['website10', 'website11', 'website12'],
  role: 'role2',
  description: 'description2',
  startYear: 2020,
  endYear: 2023,
  skills: [skill0, skill3, skill4],
  isCurrent: false,
};
const PROJECT_3 = {
  company: 'company3',
  websites: ['website20', 'website21', 'website22'],
  role: 'role3',
  description: 'description3',
  startYear: 2015,
  endYear: 2020,
  skills: [skill5, skill6, skill7],
  isCurrent: false,
};
const PROJECTS = [PROJECT_1, PROJECT_2, PROJECT_3];

const MISSION_1 = {
  company: 'company1',
  websites: ['website00', 'website01', 'website02'],
  place: 'place1',
  role: 'role1',
  description: 'description1',
  startYear: 2023,
  endYear: 2024,
  skills: [skill0, skill1, skill2],
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
  skills: [skill0, skill3, skill4],
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
  skills: [skill5, skill6, skill7],
  isCurrent: false,
};
const MISSIONS = [MISSION_1, MISSION_2, MISSION_3];

let skillService;
const portfolioDataPort = new PortfolioDataPort();
jest.spyOn(portfolioDataPort, 'getProjects').mockImplementation(() => PROJECTS);
jest.spyOn(portfolioDataPort, 'getMissions').mockImplementation(() => MISSIONS);
skillService = new SkillService(portfolioDataPort);

describe('getSkills', () => {
  test('should return all existing skills', () => {
    let expected = [skill0, skill1, skill2, skill3, skill4, skill5, skill6, skill7];
    let result = skillService.getSkills();
    expect(result).toEqual(expected);
  });
});

describe('getSkillsByCategory', () => {
  test('should return all the skills by category', () => {
    let category = CATEGORY_TO_SEARCH;
    let expected = [skill0, skill2, skill5];
    let result = skillService.getSkillsByCategory({}, { category });
    expect(result).toEqual(expected);
  });
});
