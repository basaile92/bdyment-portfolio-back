import commands from "../../../data/commands.js";

export default async () => {
    const sortedCommands = commands
        .sort((command1, command2) =>
            command1.command.localeCompare(command2.command)
        );
    sortedCommands
        .forEach(command =>
            command.usages.sort((usage1, usage2) =>
                usage1.parameter.localeCompare(usage2.parameter)))
  return sortedCommands
};
