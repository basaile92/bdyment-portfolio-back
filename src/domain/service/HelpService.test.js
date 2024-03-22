import { describe, expect, jest, test } from '@jest/globals';
import { HelpService } from './HelpService.js';
import { PortfolioDataPort } from '../port/PortfolioDataPort.js';

const COMMAND_TO_SEARCH = 'command2';
const COMMAND_1 = {
  command: COMMAND_TO_SEARCH,
  usages: [
    {
      parameter: 'par1',
      description: 'description1',
    },
    {
      parameter: '',
      description: 'description2',
    },
  ],
};
const COMMAND_2 = {
  command: 'command3',
  usages: [
    {
      parameter: 'par3',
      description: 'description3',
    },
    {
      parameter: 'par4',
      description: 'description4',
    },
  ],
};
const COMMAND_3 = {
  command: 'command1',
  usages: [
    {
      parameter: '',
      description: 'description5',
    },
  ],
};

const COMMANDS = [COMMAND_1, COMMAND_2, COMMAND_3];

let helpService;
const portfolioDataPort = new PortfolioDataPort();
jest.spyOn(portfolioDataPort, 'getCommands').mockImplementation(() => COMMANDS);
helpService = new HelpService(portfolioDataPort);

describe('getHelp', () => {
  test('should return all existing commands in alphabetical order', () => {
    let expected = [COMMAND_3, COMMAND_1, COMMAND_2];
    let result = helpService.getHelp();
    expect(result).toEqual(expected);
  });
});

describe('getHelpByCommand', () => {
  test('should return all the companies', () => {
    let commandLabel = COMMAND_TO_SEARCH;
    let expected = COMMAND_1;
    let result = helpService.getHelpByCommand({}, { commandLabel });
    expect(result).toEqual(expected);
  });

  test('should return null', () => {
    let unknownCommandLabel = 'unknown';
    let result = helpService.getHelpByCommand({}, { unknownCommandLabel });
    expect(result).toBeUndefined();
  });
});
