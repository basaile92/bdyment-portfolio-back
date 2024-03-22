export class SkillService {
  constructor (jsonPortfolioDataRetriever) {
    this._jsonPortfolioDataRetriever = jsonPortfolioDataRetriever;
  }

  getSkills = () => {
    const skillsProjects = this._jsonPortfolioDataRetriever.getProjects().flatMap((project) => project.skills);
    const skillsMissions = this._jsonPortfolioDataRetriever.getMissions().flatMap((mission) => mission.skills);
    const allSkills = skillsProjects.concat(skillsMissions);
    return [...new Map(allSkills.map((item) => [item.name, item])).values()];
  };

  getSkillsByCategory = (root, { category }) => {
    const skillsProjects = this._jsonPortfolioDataRetriever.getProjects().flatMap((project) => project.skills);
    const skillsMissions = this._jsonPortfolioDataRetriever.getMissions().flatMap((mission) => mission.skills);
    const allSkills = skillsProjects.concat(skillsMissions);
    return [...new Map(allSkills.map((item) => [item.name, item])).values()].filter(
      (item) => item.category === category
    );
  };
}
