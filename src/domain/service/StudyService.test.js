import { describe, expect, jest, test } from "@jest/globals";
import { StudyService } from "./StudyService.js";
import { YearUtils } from "../utils/YearUtils.js";
import { JsonPortfolioDataRetriever } from "../../infrastructure/retriever/JsonPortfolioDataRetriever.js";

const YEAR_TO_SEARCH = 2000;
const STUDY_1 = {
  label: "label1",
  place: "place1",
  school: "school1",
  startYear: 2016,
  endYear: 2018,
  diploma: "diploma1",
  degree: "degree1",
  isCurrent: false
};
const STUDY_2 = {
  label: "label2",
  place: "place2",
  school: "school2",
  startYear: 2010,
  endYear: 2016,
  diploma: "diploma2",
  degree: "degree2",
  isCurrent: false
};
const STUDIES = [STUDY_1, STUDY_2];

const jsonPortfolioDataRetriever = new JsonPortfolioDataRetriever();
jest.spyOn(jsonPortfolioDataRetriever, "getStudies").mockImplementation(() => STUDIES);
jest.spyOn(YearUtils, "compareItemsByStartYearAndEndYearAndIsCurrent").mockImplementation(() => 1);
jest.spyOn(YearUtils, "filterItemsByYear").mockImplementation((item, year) => true);
const studyService = new StudyService(jsonPortfolioDataRetriever);

describe("getStudies", () => {
  test("should return all existing studies in the right order", () => {
    const expected = STUDIES;
    const result = studyService.getStudies();
    expect(result).toEqual(expected);
  });
});

describe("getStudiesByYear", () => {
  test("should return all the studies by year in the right order", () => {
    const year = YEAR_TO_SEARCH;
    const expected = STUDIES;
    const result = studyService.getStudiesByYear({}, { year });
    expect(result).toEqual(expected);
  });
});
