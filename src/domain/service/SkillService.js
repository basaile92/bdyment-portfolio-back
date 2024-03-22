export class SkillService {
  constructor(portfolioDataPort) {
    this._portfolioDataPort = portfolioDataPort;
  }

  getSkills = () => {
    const skillsProjects = this._portfolioDataPort.getProjects().flatMap((project) => project.skills);
    const skillsMissions = this._portfolioDataPort.getMissions().flatMap((mission) => mission.skills);
    const allSkills = skillsProjects.concat(skillsMissions);
    return [...new Map(allSkills.map((item) => [item.name, item])).values()];
  };

  getSkillsByCategory = (root, { category }) => {
    const skillsProjects = this._portfolioDataPort.getProjects().flatMap((project) => project.skills);
    const skillsMissions = this._portfolioDataPort.getMissions().flatMap((mission) => mission.skills);
    const allSkills = skillsProjects.concat(skillsMissions);
    return [...new Map(allSkills.map((item) => [item.name, item])).values()].filter(
      (item) => item.category === category,
    );
  };
}
