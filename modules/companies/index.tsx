import {gql} from "apollo-server-express";
import companies from "./queries/companies";
import companiesByYear from "./queries/companiesByYear";

const companiesTypeDefs = gql`
  
  type Company {
    name: String
    website: String
    role: String
    place: String
    startYear: Int
    endYear: Int
    description: String
    isCurrent: Boolean
  }
  
  extend type Query {
    companies: [Company]
    companiesByYear(year: Int!): [Company]
  }
`;

const companiesResolvers = {
  Query: {
    companiesByYear,
    companies
  }
};

export { companiesTypeDefs, companiesResolvers };
