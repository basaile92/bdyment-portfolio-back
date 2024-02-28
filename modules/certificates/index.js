import certificates from "./queries/certificates.js";
import certificatesBySkill from "./queries/certificatesBySkill.js";
import {gql} from "apollo-server-lambda";

const certificatesTypeDefs = gql`
  
  type Certificate {
    certifier: String
    skill: String
    year: Int
    link: String
  }
  
  extend type Query {
    certificates: [Certificate]
    certificatesBySkill(skill: String!): [Certificate]
  }
`;

const certificatesResolvers = {
  Query: {
    certificatesBySkill,
    certificates
  }
};

export { certificatesTypeDefs, certificatesResolvers };
