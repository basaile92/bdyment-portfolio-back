import { gql } from 'apollo-server-lambda';
import { GraphQLElements } from './GraphQLElements.js';

export class HobbiesGraphQLElements extends GraphQLElements {
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
