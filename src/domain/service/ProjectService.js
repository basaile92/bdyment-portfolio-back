import { YearUtils } from '../utils/YearUtils.js';

export class ProjectService {
  constructor(portfolioDataPort) {
    this._portfolioDataPort = portfolioDataPort;
  }

  getProjects = () => {
    return this._portfolioDataPort.getProjects().sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };

  getProjectsBySkill = (root, { skillName }) => {
    return this.getProjects()
      .filter((item) => item.skills.find((skill) => skill.name === skillName))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };

  getProjectsByYear = (root, { year }) => {
    return this.getProjects()
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };
}
