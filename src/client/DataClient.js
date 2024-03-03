import {
  availability,
  certificates,
  commands,
  companies,
  description,
  hobbies,
  languages,
  missions,
  projects,
  studies,
} from './jsonimporter.cjs';

export class DataClient {
  getAvailability = () => availability;
  getCertificates = () => certificates;
  getCommands = () => commands;
  getCompanies = () => companies;
  getDescription = () => description;
  getHobbies = () => hobbies;
  getLanguages = () => languages;
  getMissions = () => missions;
  getProjects = () => projects;
  getStudies = () => studies;
}
