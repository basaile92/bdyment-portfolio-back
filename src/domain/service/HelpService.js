export class HelpService {
  constructor(portfolioDataPort) {
    this._portfolioDataPort = portfolioDataPort;
  }

  getHelp = () => {
    const sortedCommands = this._portfolioDataPort
      .getCommands()
      .sort((command1, command2) => command1.command.localeCompare(command2.command));
    sortedCommands.forEach((command) =>
      command.usages.sort((usage1, usage2) => usage1.parameter.localeCompare(usage2.parameter)),
    );
    return sortedCommands;
  };

  getHelpByCommand = (root, { commandLabel }) => {
    const command = this.getHelp().find((cmd) => cmd.command === commandLabel);
    if (command) {
      command.usages.sort((usage1, usage2) => usage1.parameter.localeCompare(usage2.parameter));
    }
    return command;
  };
}
