import { gql } from "apollo-server-lambda";
import { AbstractGraphQLElements } from "./AbstractGraphQLElements.js";

export class CertificateGraphQLElements extends AbstractGraphQLElements {
  constructor(certificateService) {
    const certificates = certificateService.getCertificates;
    const certificatesBySkill = certificateService.getCertificatesBySkill;
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
        certificates,
      },
    };
    super(certificatesTypeDefs, certificatesResolvers);
  }
}
