export class SkillService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  getSkills() {
    const skillsProjects = this._dataClient.getProjects().flatMap((project) => project.skills);
    const skillsMissions = this._dataClient.getMissions().flatMap((mission) => mission.skills);
    const allSkills = skillsProjects.concat(skillsMissions);
    return [...new Map(allSkills.map((item) => [item.name, item])).values()];
  }

  getSkillsByCategory(root, { category }) {
    const skillsProjects = this._dataClient.getProjects().flatMap((project) => project.skills);
    const skillsMissions = this._dataClient.getMissions().flatMap((mission) => mission.skills);
    const allSkills = skillsProjects.concat(skillsMissions);
    return [...new Map(allSkills.map((item) => [item.name, item])).values()].filter(
      (item) => item.category === category,
    );
  }
}
