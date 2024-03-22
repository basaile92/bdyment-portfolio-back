import { describe, expect, jest, test } from "@jest/globals";
import { HelpService } from "./HelpService.js";
import { JsonPortfolioDataRetriever } from "../../infrastructure/retriever/JsonPortfolioDataRetriever.js";

const COMMAND_TO_SEARCH = "command2";
const COMMAND_1 = {
  command: COMMAND_TO_SEARCH,
  usages: [
    {
      parameter: "par1",
      description: "description1"
    },
    {
      parameter: "",
      description: "description2"
    }
  ]
};
const COMMAND_2 = {
  command: "command3",
  usages: [
    {
      parameter: "par3",
      description: "description3"
    },
    {
      parameter: "par4",
      description: "description4"
    }
  ]
};
const COMMAND_3 = {
  command: "command1",
  usages: [
    {
      parameter: "",
      description: "description5"
    }
  ]
};

const COMMANDS = [COMMAND_1, COMMAND_2, COMMAND_3];

const jsonPortfolioDataRetriever = new JsonPortfolioDataRetriever();
jest.spyOn(jsonPortfolioDataRetriever, "getCommands").mockImplementation(() => COMMANDS);
const helpService = new HelpService(jsonPortfolioDataRetriever);

describe("getHelp", () => {
  test("should return all existing commands in alphabetical order", () => {
    const expected = [COMMAND_3, COMMAND_1, COMMAND_2];
    const result = helpService.getHelp();
    expect(result).toEqual(expected);
  });
});

describe("getHelpByCommand", () => {
  test("should return all the companies", () => {
    const commandLabel = COMMAND_TO_SEARCH;
    const expected = COMMAND_1;
    const result = helpService.getHelpByCommand({}, { commandLabel });
    expect(result).toEqual(expected);
  });

  test("should return null", () => {
    const unknownCommandLabel = "unknown";
    const result = helpService.getHelpByCommand({}, { unknownCommandLabel });
    expect(result).toBeUndefined();
  });
});
