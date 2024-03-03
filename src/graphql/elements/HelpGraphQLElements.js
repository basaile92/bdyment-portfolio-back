import { gql } from "apollo-server-lambda";
import { AbstractGraphQLElements } from "./AbstractGraphQLElements.js";

export class HelpGraphQLElements extends AbstractGraphQLElements {
  constructor(helpService) {
    const help = helpService.getHelp;
    const helpByCommand = helpService.getHelpByCommand;
    const helpTypeDefs = gql`
      type Usage {
        parameter: String!
        description: String!
      }

      type Command {
        command: String!
        usages: [Usage]!
      }

      extend type Query {
        help: [Command]
        helpByCommand(commandLabel: String!): Command
      }
    `;

    const helpResolvers = {
      Query: {
        helpByCommand,
        help,
      },
    };
    super(helpTypeDefs, helpResolvers);
  }
}
