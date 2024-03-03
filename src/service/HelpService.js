export class HelpService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  async getHelp() {
    const sortedCommands = this._dataClient
      .getCommands()
      .sort((command1, command2) => command1.command.localeCompare(command2.command));
    sortedCommands.forEach((command) =>
      command.usages.sort((usage1, usage2) => usage1.parameter.localeCompare(usage2.parameter)),
    );
    return sortedCommands;
  }

  async getHelpByCommand(root, { commandLabel }) {
    const command = (await this.getHelp()).find((cmd) => cmd.command === commandLabel);
    if (command) {
      command.usages.sort((usage1, usage2) => usage1.parameter.localeCompare(usage2.parameter));
    }
    return command;
  }
}
