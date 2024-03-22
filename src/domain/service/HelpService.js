export class HelpService {
  constructor(jsonPortfolioDataRetriever) {
    this._jsonPortfolioDataRetriever = jsonPortfolioDataRetriever;
  }

  getHelp = () => {
    const sortedCommands = this._jsonPortfolioDataRetriever
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
