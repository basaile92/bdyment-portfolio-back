import { gql } from 'apollo-server-lambda';
import { AbstractGraphQLElements } from './AbstractGraphQLElements.js';

export class StudyGraphQLElements extends AbstractGraphQLElements {
  constructor(studyService) {
    const studies = studyService.getStudies;
    const studiesByYear = studyService.getStudiesByYear;
    const studiesTypeDefs = gql`
      type Study {
        label: String
        place: String
        school: String
        startYear: Int
        endYear: Int
        diploma: String
        degree: String
        isCurrent: Boolean
      }

      extend type Query {
        studies: [Study]
        studiesByYear(year: Int!): [Study]
      }
    `;

    const studiesResolvers = {
      Query: {
        studiesByYear,
        studies,
      },
    };
    super(studiesTypeDefs, studiesResolvers);
  }
}
