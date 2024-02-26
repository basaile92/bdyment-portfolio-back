import hobbies from "./queries/hobbies.js";
import {gql} from "apollo-server-lambda";

const hobbiesTypeDefs = gql`
  extend type Query {
    hobbies: [String]
  }
`;

const hobbiesResolvers = {
  Query: {
    hobbies
  }
};

export { hobbiesTypeDefs, hobbiesResolvers };
