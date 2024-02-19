import {gql} from "apollo-server-express";
import studies from "./queries/studies";
import studiesByYear from "./queries/studiesByYear";

const studiesTypeDefs = gql`
  
  type Study {
    label: String
    place: String
    school: String
    startYear: Int
    endYear: Int
    diploma: String
    degree: String
  }
  
  extend type Query {
    studies: [Study]
    studiesByYear(year: Int!): [Study]
  }
`;

const studiesResolvers = {
  Query: {
    studiesByYear,
    studies
  }
};

export { studiesTypeDefs, studiesResolvers };
