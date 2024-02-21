import {gql} from "apollo-server-express";
import help from "./queries/help";
import helpByCommand from "./queries/helpByCommand";

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
    help
  }
};

export { helpTypeDefs, helpResolvers };
