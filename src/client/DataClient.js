const availability = '../../data/availability.json';
const certificates = '../../data/certificates.json';
const commands = '../../data/commands.json';
const companies = '../../data/companies.json';
const description = '../../data/description.json';
const hobbies = '../../data/hobbies.json';
const languages = '../../data/languages.json';
const missions = '../../data/missions.json';
const projects = '../../data/projects.json';
const studies = '../../data/studies.json';

export class DataClient {
  getAvailability = () => {
    console.log(availability);
    return availability;
  };
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
