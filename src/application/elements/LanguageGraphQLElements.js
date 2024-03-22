import { gql } from 'apollo-server-lambda';
import { GraphQLElements } from './GraphQLElements.js';

export class LanguageGraphQLElements extends GraphQLElements {
  constructor(languagesService) {
    const languages = languagesService.getLanguages;
    const languagesTypeDefs = gql`
      type Language {
        name: String
        level: String
      }

      extend type Query {
        languages: [Language]
      }
    `;

    const languagesResolvers = {
      Query: {
        languages,
      },
    };
    super(languagesTypeDefs, languagesResolvers);
  }
}
