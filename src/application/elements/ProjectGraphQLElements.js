import { gql } from "apollo-server-lambda";
import { GraphQLElements } from "./GraphQLElements.js";

export class ProjectGraphQLElements extends GraphQLElements {
  constructor (projectService) {
    const projects = projectService.getProjects;
    const projectsBySkill = projectService.getProjectsBySkill;
    const projectsByYear = projectService.getProjectsByYear;
    const projectsTypeDefs = gql`
      type Project {
        name: String
        websites: [String]
        role: String
        description: String
        startYear: Int
        endYear: Int
        skills: [Skill]
        isCurrent: Boolean
      }

      extend type Query {
        projects: [Project]
        projectsByYear(year: Int!): [Project]
        projectsBySkill(skillName: String!): [Project]
      }
    `;

    const projectsResolvers = {
      Query: {
        projectsByYear,
        projectsBySkill,
        projects
      }
    };
    super(projectsTypeDefs, projectsResolvers);
  }
}
