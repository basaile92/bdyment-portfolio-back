import { availability } from '../data/availability.js';
import { certificates } from '../data/certificates.js';
import { commands } from '../data/commands.js';
import { companies } from '../data/companies.js';
import { description } from '../data/description.js';
import { hobbies } from '../data/hobbies.js';
import { languages } from '../data/languages.js';
import { missions } from '../data/missions.js';
import { projects } from '../data/projects.js';
import { studies } from '../data/studies.js';

export class JsonPortfolioDataRetriever {
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
