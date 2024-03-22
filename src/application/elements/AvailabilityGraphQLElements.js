import { gql } from "apollo-server-lambda";
import { GraphQLElements } from "./GraphQLElements.js";

export class AvailabilityGraphQLElements extends GraphQLElements {
  constructor (availabilityService) {
    const availability = availabilityService.getAvailability;
    const availabilityTypeDefs = gql`
      type Availability {
        date: String
      }

      extend type Query {
        availability: Availability
      }
    `;
    const availabilityResolvers = {
      Query: {
        availability
      }
    };
    super(availabilityTypeDefs, availabilityResolvers);
  }
}
