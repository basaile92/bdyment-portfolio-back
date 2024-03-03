import { gql } from "apollo-server-lambda";
import { AbstractGraphQLElements } from "./AbstractGraphQLElements.js";

export class LanguageGraphQLElements extends AbstractGraphQLElements {
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
