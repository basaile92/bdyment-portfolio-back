import {gql} from "apollo-server-express";
import {GraphQLScalarType} from "graphql";
import {makeExecutableSchema} from "@graphql-tools/schema";
import {descriptionTypeDefs, descriptionResolvers} from "./description"
import {skillsTypeDefs, skillsResolvers} from "./skills"
import {languagesResolvers, languagesTypeDefs} from "./languages";
import {hobbiesResolvers, hobbiesTypeDefs} from "./hobbies";

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
  typeDefs: [typeDefs, descriptionTypeDefs, skillsTypeDefs, languagesTypeDefs, hobbiesTypeDefs],
  resolvers: [resolvers, descriptionResolvers, skillsResolvers, languagesResolvers, hobbiesResolvers],
});

export default schema;
