import availability from "../../data/availability.json";
import certificates from "../../data/certificates.json";
import commands from "../../data/commands.json";
import companies from "../../data/companies.json";
import description from "../../data/description.json";
import hobbies from "../../data/hobbies.json";
import languages from "../../data/languages.json";
import missions from "../../data/missions.json";
import projects from "../../data/projects.json";
import studies from "../../data/studies.json";

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
