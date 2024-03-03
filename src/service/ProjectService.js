import { YearUtils } from '../utils/YearUtils.js';

export class ProjectService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  getProjects = () => {
    return this._dataClient.getProjects().sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
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
