import { gql } from 'apollo-server-lambda';
import { AbstractGraphQLElements } from './AbstractGraphQLElements.js';

export class BaseGraphQLElements extends AbstractGraphQLElements {
  constructor() {
    const baseTypeDefs = gql`
      scalar Time

      type Query {
        getVersion: String!
      }

      type Mutation {
        version: String!
      }
    `;

    const timeScalar = new GraphQLScalarType({
      name: 'Time',
      description: 'Time custom scalar type',
      serialize: (value) => value,
    });

    const baseResolvers = {
      Time: timeScalar,
      Query: {},
    };
    super(baseTypeDefs, baseResolvers);
  }
}
