import commands from "../../../data/commands";

export default async (root:any, { commandLabel }: any) => {
    const command = commands
        .find((cmd) =>
            cmd.command == commandLabel
        );
    if(command) {
        command.usages.sort((usage1, usage2) =>
            usage1.parameter.localeCompare(usage2.parameter));
    }
  return command;
};