import { ApolloServer } from 'apollo-server-lambda';
import { SchemaBuilder } from './src/graphql/SchemaBuilder.js';
import { BaseGraphQLElements } from './src/graphql/elements/BaseGraphQLElements.js';
import { AvailabilityGraphQLElements } from './src/graphql/elements/AvailabilityGraphQLElements.js';
import { AvailabilityService } from './src/service/AvailabilityService.js';
import { DataClient } from './src/client/DataClient.js';
import { CertificateGraphQLElements } from './src/graphql/elements/CertificateGraphQLElements.js';
import { CertificateService } from './src/service/CertificateService.js';
import { CompanyGraphQLElements } from './src/graphql/elements/CompanyGraphQLElements.js';
import { CompanyService } from './src/service/CompanyService.js';
import { DescriptionGraphQLElements } from './src/graphql/elements/DescriptionGraphQLElements.js';
import { DescriptionService } from './src/service/DescriptionService.js';
import { HelpGraphQLElements } from './src/graphql/elements/HelpGraphQLElements.js';
import { HelpService } from './src/service/HelpService.js';
import { HobbiesGraphQLElements } from './src/graphql/elements/HobbiesGraphQLElements.js';
import { HobbiesService } from './src/service/HobbiesService.js';
import { LanguageGraphQLElements } from './src/graphql/elements/LanguageGraphQLElements.js';
import { LanguageService } from './src/service/LanguageService.js';
import { MissionGraphQLElements } from './src/graphql/elements/MissionGraphQLElements.js';
import { MissionService } from './src/service/MissionService.js';
import { ProjectGraphQLElements } from './src/graphql/elements/ProjectGraphQLElements.js';
import { ProjectService } from './src/service/ProjectService.js';
import { SkillGraphQLElements } from './src/graphql/elements/SkillGraphQLElements.js';
import { StudyGraphQLElements } from './src/graphql/elements/StudyGraphQLElements.js';
import { StudyService } from './src/service/StudyService.js';
import { SkillService } from './src/service/SkillService.js';

const dataClient = new DataClient();
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
