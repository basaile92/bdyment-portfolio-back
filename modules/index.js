import {GraphQLScalarType} from "graphql";
import {descriptionResolvers, descriptionTypeDefs} from "./description/index.js"
import {skillsResolvers, skillsTypeDefs} from "./skills/index.js"
import {languagesResolvers, languagesTypeDefs} from "./languages/index.js";
import {hobbiesResolvers, hobbiesTypeDefs} from "./hobbies/index.js";
import {studiesResolvers, studiesTypeDefs} from "./studies/index.js";
import {companiesResolvers, companiesTypeDefs} from "./companies/index.js";
import {missionsResolvers, missionsTypeDefs} from "./missions/index.js";
import {projectsResolvers, projectsTypeDefs} from "./projects/index.js";
import {helpResolvers, helpTypeDefs} from "./help/index.js";
import {gql} from "apollo-server-lambda";
import {
  availabilityResolvers,
  availabilityTypeDefs
} from "./availability/index.js";
import {
  certificatesResolvers,
  certificatesTypeDefs
} from "./certificates/index.js";

const typeDefs = gql`
  scalar Time

  type Query {
    getVersion: String!
  }

  type Mutation {
    version: String!
  }
`;

const timeScalar = new GraphQLScalarType({
  name: 'Time',
  description: 'Time custom scalar type',
  serialize: (value) => value,
});

const resolvers = {
  Time: timeScalar,
  Query: {
  },
};

const schema = {
  typeDefs: [typeDefs, descriptionTypeDefs, skillsTypeDefs, languagesTypeDefs, hobbiesTypeDefs, studiesTypeDefs, companiesTypeDefs, missionsTypeDefs, projectsTypeDefs, helpTypeDefs, availabilityTypeDefs, certificatesTypeDefs],
  resolvers: [resolvers, descriptionResolvers, skillsResolvers, languagesResolvers, hobbiesResolvers, studiesResolvers, companiesResolvers, missionsResolvers, projectsResolvers, helpResolvers, availabilityResolvers, certificatesResolvers],
  playground: true,
  introspection: true
};

export default schema;
