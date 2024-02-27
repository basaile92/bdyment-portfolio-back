import projects from "./queries/projects.js";
import projectsByYear from "./queries/projectsByYear.js";
import projectsBySkill from "./queries/projectsBySkill.js";
import {gql} from "apollo-server-lambda";

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

export { projectsTypeDefs, projectsResolvers };
