import studies from "./queries/studies.js";
import studiesByYear from "./queries/studiesByYear.js";
import {gql} from "apollo-server-lambda";

const studiesTypeDefs = gql`
  
  type Study {
    label: String
    place: String
    school: String
    startYear: Int
    endYear: Int
    diploma: String
    degree: String
    isCurrent: Boolean
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
