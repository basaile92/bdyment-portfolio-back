import { describe, expect, jest, test } from "@jest/globals";
import { ProjectService } from "./ProjectService.js";
import { YearUtils } from "../utils/YearUtils.js";
import { JsonPortfolioDataRetriever } from "../../infrastructure/retriever/JsonPortfolioDataRetriever.js";

const YEAR_TO_SEARCH = 2020;
const SKILL_TO_SEARCH = "skill00";
const PROJECT_1 = {
  name: "name1",
  websites: ["website00", "website01", "website02"],
  role: "role1",
  description: "description1",
  startYear: 2023,
  endYear: 2024,
  skills: [
    {
      name: SKILL_TO_SEARCH,
      category: "category00"
    },
    {
      name: "skill01",
      category: "category01"
    },
    {
      name: "skill02",
      category: "category02"
    }
  ],
  isCurrent: false
};
const PROJECT_2 = {
  name: "name2",
  websites: ["website10", "website11", "website12"],
  role: "role2",
  description: "description2",
  startYear: 2020,
  endYear: 2023,
  skills: [
    {
      name: SKILL_TO_SEARCH,
      category: "category00"
    },
    {
      name: "skill11",
      category: "category11"
    },
    {
      name: "skill12",
      category: "category12"
    }
  ],
  isCurrent: false
};
const PROJECT_3 = {
  company: "company3",
  websites: ["website20", "website21", "website22"],
  role: "role3",
  description: "description3",
  startYear: 2015,
  endYear: 2020,
  skills: [
    {
      name: "skill20",
      category: "category20"
    },
    {
      name: "skill21",
      category: "category21"
    },
    {
      name: "skill22",
      category: "category22"
    }
  ],
  isCurrent: false
};
const PROJECTS = [PROJECT_1, PROJECT_2, PROJECT_3];

const jsonPortfolioDataRetriever = new JsonPortfolioDataRetriever();
jest.spyOn(jsonPortfolioDataRetriever, "getProjects").mockImplementation(() => PROJECTS);
jest.spyOn(YearUtils, "compareItemsByStartYearAndEndYearAndIsCurrent").mockImplementation(() => 1);
jest.spyOn(YearUtils, "filterItemsByYear").mockImplementation((item, year) => true);
const projectService = new ProjectService(jsonPortfolioDataRetriever);

describe("getProjects", () => {
  test("should return all existing projects in the right order", () => {
    const expected = PROJECTS;
    const result = projectService.getProjects();
    expect(result).toEqual(expected);
  });
});

describe("getProjectsBySkill", () => {
  test("should return all the projects by skill in the right order", () => {
    const skillName = SKILL_TO_SEARCH;
    const expected = [PROJECT_1, PROJECT_2];
    const result = projectService.getProjectsBySkill({}, { skillName });
    expect(result).toEqual(expected);
  });
});

describe("getProjectsByYear", () => {
  test("should return all the projects by year in the right order", () => {
    const year = YEAR_TO_SEARCH;
    const expected = PROJECTS;
    const result = projectService.getProjectsByYear({}, { year });
    expect(result).toEqual(expected);
  });
});