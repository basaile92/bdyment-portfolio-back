import missions from "./queries/missions";
import missionsByYear from "./queries/missionsByYear";
import missionsBySkill from "./queries/missionsBySkill";
import {gql} from "apollo-server-lambda";

const missionsTypeDefs = gql`

  type Mission {
    company: String
    website: String
    role: String
    place: String
    description: String
    startYear: Int
    endYear: Int
    skills: [Skill]
    isCurrent: Boolean
  }
  
  extend type Query {
    missions: [Mission]
    missionsByYear(year: Int!): [Mission]
    missionsBySkill(skillName: String!): [Mission]
  }
`;

const missionsResolvers = {
  Query: {
    missionsByYear,
    missionsBySkill,
    missions
  }
};

export { missionsTypeDefs, missionsResolvers };
