import {GraphQLScalarType} from "graphql";
import {makeExecutableSchema} from "@graphql-tools/schema";
import {descriptionResolvers, descriptionTypeDefs} from "./description"
import {skillsResolvers, skillsTypeDefs} from "./skills"
import {languagesResolvers, languagesTypeDefs} from "./languages";
import {hobbiesResolvers, hobbiesTypeDefs} from "./hobbies";
import {studiesResolvers, studiesTypeDefs} from "./studies";
import {companiesResolvers, companiesTypeDefs} from "./companies";
import {missionsResolvers, missionsTypeDefs} from "./missions";
import {projectsResolvers, projectsTypeDefs} from "./projects";
import {helpResolvers, helpTypeDefs} from "./help";
import {gql} from "apollo-server-lambda";

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

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, descriptionTypeDefs, skillsTypeDefs, languagesTypeDefs, hobbiesTypeDefs, studiesTypeDefs, companiesTypeDefs, missionsTypeDefs, projectsTypeDefs, helpTypeDefs],
  resolvers: [resolvers, descriptionResolvers, skillsResolvers, languagesResolvers, hobbiesResolvers, studiesResolvers, companiesResolvers, missionsResolvers, projectsResolvers, helpResolvers],
});

export default schema;
