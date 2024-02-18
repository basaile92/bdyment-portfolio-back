import {gql} from "apollo-server-express";
import description from "./queries/description";

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
