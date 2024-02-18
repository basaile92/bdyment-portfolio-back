import {gql} from "apollo-server-express";
import {GraphQLScalarType} from "graphql";
import {makeExecutableSchema} from "@graphql-tools/schema";
import {descriptionTypeDefs, descriptionResolvers} from "./description"
import {skillsTypeDefs, skillsResolvers} from "./skills"

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
  typeDefs: [typeDefs, descriptionTypeDefs, skillsTypeDefs],
  resolvers: [resolvers, descriptionResolvers, skillsResolvers],
});

export default schema;
