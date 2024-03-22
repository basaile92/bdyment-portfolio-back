import { ApolloServer } from "apollo-server-lambda";
import { JsonPortfolioDataRetriever } from "./src/infrastructure/./retriever/JsonPortfolioDataRetriever.js";
import { BaseGraphQLElements } from "./src/application/elements/BaseGraphQLElements.js";
import { AvailabilityGraphQLElements } from "./src/application/elements/AvailabilityGraphQLElements.js";
import { CertificateGraphQLElements } from "./src/application/elements/CertificateGraphQLElements.js";
import { CompanyGraphQLElements } from "./src/application/elements/CompanyGraphQLElements.js";
import { DescriptionGraphQLElements } from "./src/application/elements/DescriptionGraphQLElements.js";
import { HelpGraphQLElements } from "./src/application/elements/HelpGraphQLElements.js";
import { HobbiesGraphQLElements } from "./src/application/elements/HobbiesGraphQLElements.js";
import { LanguageGraphQLElements } from "./src/application/elements/LanguageGraphQLElements.js";
import { MissionGraphQLElements } from "./src/application/elements/MissionGraphQLElements.js";
import { ProjectGraphQLElements } from "./src/application/elements/ProjectGraphQLElements.js";
import { SkillGraphQLElements } from "./src/application/elements/SkillGraphQLElements.js";
import { StudyGraphQLElements } from "./src/application/elements/StudyGraphQLElements.js";
import { SchemaBuilder } from "./src/application/schema/SchemaBuilder.js";
import { AvailabilityService } from "./src/domain/service/AvailabilityService.js";
import { CertificateService } from "./src/domain/service/CertificateService.js";
import { CompanyService } from "./src/domain/service/CompanyService.js";
import { DescriptionService } from "./src/domain/service/DescriptionService.js";
import { HobbiesService } from "./src/domain/service/HobbiesService.js";
import { HelpService } from "./src/domain/service/HelpService.js";
import { LanguageService } from "./src/domain/service/LanguageService.js";
import { MissionService } from "./src/domain/service/MissionService.js";
import { ProjectService } from "./src/domain/service/ProjectService.js";
import { SkillService } from "./src/domain/service/SkillService.js";
import { StudyService } from "./src/domain/service/StudyService.js";

export const buildGraphQLElementsList = () => {
  const jsonPortFolioAdapter = new JsonPortfolioDataRetriever();
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
    studyGraphQLElements
  ];
};
const schemaBuilder = new SchemaBuilder(buildGraphQLElementsList());
const server = new ApolloServer(schemaBuilder.build());
export const handler = server.createHandler();
