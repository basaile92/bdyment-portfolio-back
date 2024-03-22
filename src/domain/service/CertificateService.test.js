import { describe, expect, jest, test } from "@jest/globals";
import { CertificateService } from "./CertificateService.js";
import { YearUtils } from "../utils/YearUtils.js";
import { JsonPortfolioDataRetriever } from "../../infrastructure/retriever/JsonPortfolioDataRetriever.js";

const SKILL_TO_SEARCH = "skillToSearch";
const CERTIFICATE_1 = { certifier: "certifier1", skill: SKILL_TO_SEARCH, year: "1", link: "link1" };
const CERTIFICATE_2 = { certifier: "certifier2", skill: SKILL_TO_SEARCH, year: "2", link: "link2" };
const CERTIFICATE_3 = { certifier: "certifier3", skill: "skill3", year: "3", link: "link3" };
const CERTIFICATES = [CERTIFICATE_1, CERTIFICATE_2, CERTIFICATE_3];

const jsonPortfolioDataRetriever = new JsonPortfolioDataRetriever();
jest.spyOn(jsonPortfolioDataRetriever, "getCertificates").mockImplementation(() => CERTIFICATES);
jest.spyOn(YearUtils, "compareItemsByYear").mockImplementation(() => 1);
const certificateService = new CertificateService(jsonPortfolioDataRetriever);

describe("getCertificates", () => {
  test("should return all existing certificates in the right order", () => {
    const expected = CERTIFICATES;
    const result = certificateService.getCertificates();
    expect(result).toEqual(expected);
  });
});

describe("getCertificatesBySkill", () => {
  test("should return the correct certificates for a given skill in the right order", () => {
    const skill = SKILL_TO_SEARCH;
    const expected = [CERTIFICATE_1, CERTIFICATE_2];
    const result = certificateService.getCertificatesBySkill({}, { skill });
    expect(result).toEqual(expected);
  });

  test("should return an empty array for an unknown skill", () => {
    const skill = "unknownSkill";
    const expected = [];
    const result = certificateService.getCertificatesBySkill({}, { skill });
    expect(result).toEqual(expected);
  });
});
