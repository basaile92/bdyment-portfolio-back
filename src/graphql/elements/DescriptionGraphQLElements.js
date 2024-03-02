import { gql } from 'apollo-server-lambda';
import { AbstractGraphQLElements } from './AbstractGraphQLElements.js';

export class DescriptionGraphQLElements extends AbstractGraphQLElements {
  constructor(descriptionService) {
    const description = descriptionService.getDescription;
    const descriptionTypeDefs = gql`
      type Age {
        timeInHour: Int
        timeInDay: Int
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
        description,
      },
    };
    super(descriptionTypeDefs, descriptionResolvers);
  }
}
