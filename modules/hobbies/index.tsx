import {gql} from "apollo-server-express";
import hobbies from "./queries/hobbies";

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
