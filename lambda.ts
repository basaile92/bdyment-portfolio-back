import { ApolloServer } from 'apollo-server-lambda';
import { JsonPortfolioDataRetrieverAdapter } from './src/infrastructure/./adapter/JsonPortfolioDataRetrieverAdapter';
import { BaseGraphQLElements } from './src/application/elements/BaseGraphQLElements';
import { AvailabilityGraphQLElements } from './src/application/elements/AvailabilityGraphQLElements';
import { CertificateGraphQLElements } from './src/application/elements/CertificateGraphQLElements';
import { CompanyGraphQLElements } from './src/application/elements/CompanyGraphQLElements';
import { DescriptionGraphQLElements } from './src/application/elements/DescriptionGraphQLElements';
import { HelpGraphQLElements } from './src/application/elements/HelpGraphQLElements';
import { HobbiesGraphQLElements } from './src/application/elements/HobbiesGraphQLElements';
import { LanguageGraphQLElements } from './src/application/elements/LanguageGraphQLElements';
import { MissionGraphQLElements } from './src/application/elements/MissionGraphQLElements';
import { ProjectGraphQLElements } from './src/application/elements/ProjectGraphQLElements';
import { SkillGraphQLElements } from './src/application/elements/SkillGraphQLElements';
import { StudyGraphQLElements } from './src/application/elements/StudyGraphQLElements';
import { SchemaBuilder } from './src/application/schema/SchemaBuilder';
import { AvailabilityService } from './src/domain/service/AvailabilityService';
import { CertificateService } from './src/domain/service/CertificateService';
import { CompanyService } from './src/domain/service/CompanyService';
import { DescriptionService } from './src/domain/service/DescriptionService';
import { HobbiesService } from './src/domain/service/HobbiesService';
import { HelpService } from './src/domain/service/HelpService';
import { LanguageService } from './src/domain/service/LanguageService';
import { MissionService } from './src/domain/service/MissionService';
import { ProjectService } from './src/domain/service/ProjectService';
import { SkillService } from './src/domain/service/SkillService';
import { StudyService } from './src/domain/service/StudyService';

export const buildGraphQLElementsList = () => {
  const jsonPortFolioAdapter = new JsonPortfolioDataRetrieverAdapter();
  const baseGraphQLElements = new BaseGraphQLElements();
  const availabilityGraphQLElements = new AvailabilityGraphQLElements(new AvailabilityService(jsonPortFolioAdapter));
  const certificateGraphQLElements = new CertificateGraphQLElements(new CertificateService(jsonPortFolioAdapter));
  const companyGraphQLElements = new CompanyGraphQLElements(new CompanyService(jsonPortFolioAdapter));
  const descriptionGraphQLElements = new DescriptionGraphQLElements(new DescriptionService(jsonPortFolioAdapter));
  const helpGraphQLElements = new HelpGraphQLElements(new HelpService(jsonPortFolioAdapter));
  const hobbiesGraphQLElements = new HobbiesGraphQLElements(new HobbiesService(jsonPortFolioAdapter));
  const languageGraphQLElements = new LanguageGraphQLElements(new LanguageService(jsonPortFolioAdapter));
  const missionGraphQLElements = new MissionGraphQLElements(new MissionService(jsonPortFolioAdapter));
  const projectGraphQLElements = new ProjectGraphQLElements(new ProjectService(jsonPortFolioAdapter));
  const skillGraphQLElements = new SkillGraphQLElements(new SkillService(jsonPortFolioAdapter));
  const studyGraphQLElements = new StudyGraphQLElements(new StudyService(jsonPortFolioAdapter));
  return [
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
  ];
};
const schemaBuilder = new SchemaBuilder(buildGraphQLElementsList());
const server = new ApolloServer(schemaBuilder.build());
export const handler = server.createHandler();
