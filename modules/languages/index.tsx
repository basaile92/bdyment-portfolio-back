import languages from "./queries/languages";
import {gql} from "apollo-server-lambda";

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
