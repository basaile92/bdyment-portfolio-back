import availability from '../../data/availability.json' with { type: 'json' };
import certificates from '../../data/certificates.json' with { type: 'json' };
import commands from '../../data/commands.json' with { type: 'json' };
import companies from '../../data/companies.json' with { type: 'json' };
import description from '../../data/description.json' with { type: 'json' };
import hobbies from '../../data/hobbies.json' with { type: 'json' };
import languages from '../../data/languages.json' with { type: 'json' };
import missions from '../../data/missions.json' with { type: 'json' };
import projects from '../../data/projects.json' with { type: 'json' };
import studies from '../../data/studies.json' with { type: 'json' };

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
