import { describe, expect, it, jest, test } from '@jest/globals';
import { DataClient } from '../client/DataClient.js';
import { HelpService } from './HelpService.js';

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
const dataClient = new DataClient();
jest.spyOn(dataClient, 'getCommands').mockImplementation(() => COMMANDS);
helpService = new HelpService(dataClient);

describe('getHelp', () => {
  it('should return all existing commands in alphabetical order', async () => {
    let expected = [COMMAND_3, COMMAND_1, COMMAND_2];
    let result = await helpService.getHelp();
    expect(result).toEqual(expected);
  });
});

describe('getHelpByCommand', () => {
  it('should return all the companies', async () => {
    let commandLabel = COMMAND_TO_SEARCH;
    let expected = COMMAND_1;
    let result = await helpService.getHelpByCommand({}, { commandLabel });
    expect(result).toEqual(expected);
  });

  it('should return null', async () => {
    let unknownCommandLabel = 'unknown';
    let result = await helpService.getHelpByCommand({}, { unknownCommandLabel });
    expect(result).toBeUndefined();
  });
});
