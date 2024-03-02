import * as availability from '../../data/availability.json';
import * as certificates from '../../data/certificates.json';
import * as commands from '../../data/commands.json';
import * as companies from '../../data/companies.json';
import * as description from '../../data/description.json';
import * as hobbies from '../../data/hobbies.json';
import * as languages from '../../data/languages.json';
import * as missions from '../../data/missions.json';
import * as projects from '../../data/projects.json';
import * as studies from '../../data/studies.json';

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
