import { gql } from 'apollo-server-lambda';
import { AbstractGraphQLElements } from './AbstractGraphQLElements.js';

export class BaseGraphQLElements extends AbstractGraphQLElements {
  constructor() {
    const baseTypeDefs = gql`
      type Query {
        getVersion: String!
      }
    `;

    const baseResolvers = {
      Query: {},
    };
    super(baseTypeDefs, baseResolvers);
  }
}
