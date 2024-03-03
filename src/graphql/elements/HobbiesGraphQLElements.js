import { gql } from 'apollo-server-lambda';
import { AbstractGraphQLElements } from './AbstractGraphQLElements.js';

export class HobbiesGraphQLElements extends AbstractGraphQLElements {
  constructor(hobbiesService) {
    const hobbies = hobbiesService.getHobbies;
    const hobbiesTypeDefs = gql`
      extend type Query {
        hobbies: [String]
      }
    `;

    const hobbiesResolvers = {
      Query: {
        hobbies,
      },
    };
    super(hobbiesTypeDefs, hobbiesResolvers);
  }
}
