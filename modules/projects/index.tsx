import {gql} from "apollo-server-express";
import projects from "./queries/projects";
import projectsByYear from "./queries/projectsByYear";
import projectsBySkill from "./queries/projectsBySkill";

const projectsTypeDefs = gql`

  type Project {
    name: String
    website: String
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

export { projectsTypeDefs, projectsResolvers };
