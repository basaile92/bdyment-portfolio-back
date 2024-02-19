import {gql} from "apollo-server-express";
import studies from "./queries/studies";

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
  }
`;

const studiesResolvers = {
  Query: {
    studies
  }
};

export { studiesTypeDefs, studiesResolvers };
