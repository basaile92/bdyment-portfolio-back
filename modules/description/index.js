import description from "./queries/description.js";
import {gql} from "apollo-server-lambda";

const descriptionTypeDefs = gql`
  type Age {
    timeInHour: Int,
    timeInDay: Int,
    timeInYear: Int
  }
  
  type Description {
    name: String
    age: Age
    job: String
    linkedin: String
    github: String
    presentation: String
  }

  extend type Query {
    description: Description
  }
`;

const descriptionResolvers = {
  Query: {
    description
  }
};

export { descriptionTypeDefs, descriptionResolvers };
