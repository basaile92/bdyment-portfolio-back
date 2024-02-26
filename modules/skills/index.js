import skills from "./queries/skills.js";
import skillsByCategory from "./queries/skillsByCategory.js";
import {gql} from "apollo-server-lambda";

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
    skills
  }
};

export { skillsTypeDefs, skillsResolvers };
