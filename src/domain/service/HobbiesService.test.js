import { describe, expect, jest, test } from "@jest/globals";
import { HobbiesService } from "./HobbiesService.js";
import { JsonPortfolioDataRetriever } from "../../infrastructure/retriever/JsonPortfolioDataRetriever.js";

const HOBBIES = ["hobbies1", "hobbies2", "hobbies3"];

const jsonPortfolioDataRetriever = new JsonPortfolioDataRetriever();
jest.spyOn(jsonPortfolioDataRetriever, "getHobbies").mockImplementation(() => HOBBIES);
const hobbiesService = new HobbiesService(jsonPortfolioDataRetriever);

describe("getHobbies", () => {
  test("should return all existing hobbies", () => {
    const expected = HOBBIES;
    const result = hobbiesService.getHobbies();
    expect(result).toEqual(expected);
  });
});
