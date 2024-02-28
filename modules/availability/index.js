import availability from "./queries/availability.js";
import {gql} from "apollo-server-lambda";

const availabilityTypeDefs = gql`
  
  type Availability {
    date: date
  }
  
  extend type Query {
    availability: Availability
  }
`;

const availabilityResolvers = {
  Query: {
    availability,
  }
};

export { availabilityTypeDefs, availabilityResolvers };
