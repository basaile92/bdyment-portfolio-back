import {gql} from "apollo-server-express";
import languages from "./queries/languages";

const languagesTypeDefs = gql`
  
  type Language {
    name: String
    level: String
  }
  
  extend type Query {
    languages: [Language]
  }
`;

const languagesResolvers = {
  Query: {
    languages
  }
};

export { languagesTypeDefs, languagesResolvers };