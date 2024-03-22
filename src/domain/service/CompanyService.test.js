import { describe, expect, jest, test } from "@jest/globals";
import { CompanyService } from "./CompanyService.js";
import { YearUtils } from "../utils/YearUtils.js";
import { JsonPortfolioDataRetriever } from "../../infrastructure/retriever/JsonPortfolioDataRetriever.js";

const YEAR_TO_SEARCH = 2000;
const COMPANY_1 = {
  name: "name1",
  websites: "website1",
  role: "role1",
  startYear: YEAR_TO_SEARCH,
  isCurrent: true
};
const COMPANY_2 = {
  name: "name2",
  websites: "website2",
  role: "role2",
  startYear: YEAR_TO_SEARCH - 5,
  endYear: YEAR_TO_SEARCH,
  description: "description2"
};
const COMPANY_3 = {
  name: "name3",
  websites: "website3",
  role: "role3",
  startYear: 2003,
  endYear: 2004,
  description: "description2"
};
const COMPANIES = [COMPANY_1, COMPANY_2, COMPANY_3];

const jsonPortfolioDataRetriever = new JsonPortfolioDataRetriever();
jest.spyOn(jsonPortfolioDataRetriever, "getCompanies").mockImplementation(() => COMPANIES);
jest
  .spyOn(YearUtils, "compareItemsByStartYearAndEndYearAndIsCurrent")
  .mockImplementation(() => 1);
jest.spyOn(YearUtils, "filterItemsByYear").mockImplementation((item, year) => true);
const companyService = new CompanyService(jsonPortfolioDataRetriever);

describe("getCompanies", () => {
  test("should return all existing companies in the right order", () => {
    const expected = COMPANIES;
    const result = companyService.getCompanies();
    expect(result).toEqual(expected);
  });
});

describe("getCompaniesByYear", () => {
  test("should return all the companies by year in the right order", () => {
    const year = YEAR_TO_SEARCH;
    const expected = COMPANIES;
    const result = companyService.getCompaniesByYear({}, { year });
    expect(result).toEqual(expected);
  });
});
