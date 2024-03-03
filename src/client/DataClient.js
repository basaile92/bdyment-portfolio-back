import * as availability from '../data/availability.js';
import * as certificates from '../data/certificates.js';
import * as commands from '../data/commands.js';
import * as companies from '../data/companies.js';
import * as description from '../data/description.js';
import * as hobbies from '../data/hobbies.js';
import * as languages from '../data/languages.js';
import * as missions from '../data/missions.js';
import * as projects from '../data/projects.js';
import * as studies from '../data/studies.js';
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
