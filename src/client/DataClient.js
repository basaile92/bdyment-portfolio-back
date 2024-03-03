const availability = require('../../data/availability.json');
const certificates = require('../../data/certificates.json');
const commands = require('../../data/commands.json');
const companies = require('../../data/companies.json');
const description = require('../../data/description.json');
const hobbies = require('../../data/hobbies.json');
const languages = require('../../data/languages.json');
const missions = require('../../data/missions.json');
const projects = require('../../data/projects.json');
const studies = require('../../data/studies.json');

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
