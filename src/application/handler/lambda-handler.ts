import { ApolloServer } from 'apollo-server-lambda';
import { JsonPortfolioDataRetrieverAdapter } from '../../infrastructure/adapter/JsonPortfolioDataRetrieverAdapter';
import { BaseGraphQLElements } from '../elements/BaseGraphQLElements';
import { AvailabilityGraphQLElements } from '../elements/AvailabilityGraphQLElements';
import { CertificateGraphQLElements } from '../elements/CertificateGraphQLElements';
import { CompanyGraphQLElements } from '../elements/CompanyGraphQLElements';
import { DescriptionGraphQLElements } from '../elements/DescriptionGraphQLElements';
import { HelpGraphQLElements } from '../elements/HelpGraphQLElements';
import { HobbiesGraphQLElements } from '../elements/HobbiesGraphQLElements';
import { LanguageGraphQLElements } from '../elements/LanguageGraphQLElements';
import { MissionGraphQLElements } from '../elements/MissionGraphQLElements';
import { ProjectGraphQLElements } from '../elements/ProjectGraphQLElements';
import { SkillGraphQLElements } from '../elements/SkillGraphQLElements';
import { StudyGraphQLElements } from '../elements/StudyGraphQLElements';
import { SchemaBuilder } from '../schema/SchemaBuilder';
import { AvailabilityService } from '../../domain/service/AvailabilityService';
import { CertificateService } from '../../domain/service/CertificateService';
import { CompanyService } from '../../domain/service/CompanyService';
import { DescriptionService } from '../../domain/service/DescriptionService';
import { HobbiesService } from '../../domain/service/HobbiesService';
import { HelpService } from '../../domain/service/HelpService';
import { LanguageService } from '../../domain/service/LanguageService';
import { MissionService } from '../../domain/service/MissionService';
import { ProjectService } from '../../domain/service/ProjectService';
import { SkillService } from '../../domain/service/SkillService';
import { StudyService } from '../../domain/service/StudyService';

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
