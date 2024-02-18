import {gql} from "apollo-server-express";
import skills from "./queries/skills";
import skillsByCategory from "./queries/skillsByCategory";

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
