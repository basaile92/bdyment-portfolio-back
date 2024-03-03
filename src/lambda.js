import { ApolloServer } from 'apollo-server-lambda';
import { SchemaBuilder } from './graphql/SchemaBuilder.js';
import { BaseGraphQLElements } from './graphql/elements/BaseGraphQLElements.js';
import { AvailabilityGraphQLElements } from './graphql/elements/AvailabilityGraphQLElements.js';
import { AvailabilityService } from './service/AvailabilityService.js';
import { DataClient } from './client/DataClient.js';
import { CertificateGraphQLElements } from './graphql/elements/CertificateGraphQLElements.js';
import { CertificateService } from './service/CertificateService.js';
import { CompanyGraphQLElements } from './graphql/elements/CompanyGraphQLElements.js';
import { CompanyService } from './service/CompanyService.js';
import { DescriptionGraphQLElements } from './graphql/elements/DescriptionGraphQLElements.js';
import { DescriptionService } from './service/DescriptionService.js';
import { HelpGraphQLElements } from './graphql/elements/HelpGraphQLElements.js';
import { HelpService } from './service/HelpService.js';
import { HobbiesGraphQLElements } from './graphql/elements/HobbiesGraphQLElements.js';
import { HobbiesService } from './service/HobbiesService.js';
import { LanguageGraphQLElements } from './graphql/elements/LanguageGraphQLElements.js';
import { LanguageService } from './service/LanguageService.js';
import { MissionGraphQLElements } from './graphql/elements/MissionGraphQLElements.js';
import { MissionService } from './service/MissionService.js';
import { ProjectGraphQLElements } from './graphql/elements/ProjectGraphQLElements.js';
import { ProjectService } from './service/ProjectService.js';
import { SkillGraphQLElements } from './graphql/elements/SkillGraphQLElements.js';
import { StudyGraphQLElements } from './graphql/elements/StudyGraphQLElements.js';
import { StudyService } from './service/StudyService.js';
import { SkillService } from './service/SkillService.js';

const dataClient = new DataClient();
console.log(dataClient.getAvailability());
const baseGraphQLElements = new BaseGraphQLElements();
const availabilityGraphQLElements = new AvailabilityGraphQLElements(new AvailabilityService(dataClient));
const certificateGraphQLElements = new CertificateGraphQLElements(new CertificateService(dataClient));
const companyGraphQLElements = new CompanyGraphQLElements(new CompanyService(dataClient));
const descriptionGraphQLElements = new DescriptionGraphQLElements(new DescriptionService(dataClient));
const helpGraphQLElements = new HelpGraphQLElements(new HelpService(dataClient));
const hobbiesGraphQLElements = new HobbiesGraphQLElements(new HobbiesService(dataClient));
const languageGraphQLElements = new LanguageGraphQLElements(new LanguageService(dataClient));
const missionGraphQLElements = new MissionGraphQLElements(new MissionService(dataClient));
const projectGraphQLElements = new ProjectGraphQLElements(new ProjectService(dataClient));
const skillGraphQLElements = new SkillGraphQLElements(new SkillService(dataClient));
const studyGraphQLElements = new StudyGraphQLElements(new StudyService(dataClient));
const schemaBuilder = new SchemaBuilder(
  baseGraphQLElements,
  availabilityGraphQLElements,
  certificateGraphQLElements,
  companyGraphQLElements,
  descriptionGraphQLElements,
  helpGraphQLElements,
  hobbiesGraphQLElements,
  languageGraphQLElements,
  missionGraphQLElements,
  projectGraphQLElements,
  skillGraphQLElements,
  studyGraphQLElements,
);

const server = new ApolloServer(schemaBuilder.buildSchema());
export const handler = server.createHandler();
