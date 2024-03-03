import { gql } from "apollo-server-lambda";
import { AbstractGraphQLElements } from "./AbstractGraphQLElements.js";

export class SkillGraphQLElements extends AbstractGraphQLElements {
  constructor(skillService) {
    const skills = skillService.getSkills;
    const skillsByCategory = skillService.getSkillsByCategory;
    const skillsTypeDefs = gql`
      type Skill {
        name: String
        category: String
      }

      extend type Query {
        skills: [Skill]
        skillsByCategory(category: String!): [Skill]
      }
    `;

    const skillsResolvers = {
      Query: {
        skillsByCategory,
        skills,
      },
    };
    super(skillsTypeDefs, skillsResolvers);
  }
}
