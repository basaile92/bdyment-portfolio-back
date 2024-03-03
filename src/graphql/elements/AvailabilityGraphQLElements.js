import { gql } from 'apollo-server-lambda';
import { AbstractGraphQLElements } from './AbstractGraphQLElements.js';

export class AvailabilityGraphQLElements extends AbstractGraphQLElements {
  constructor(availabilityService) {
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
        availability,
      },
    };
    super(availabilityTypeDefs, availabilityResolvers);
  }
}
