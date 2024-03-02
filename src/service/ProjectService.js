import { YearUtils } from '../utils/YearUtils.js';

export class ProjectService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  async getProjects() {
    return this._dataClient.getProjects().sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  }

  async getProjectsBySkill(root, { skillName }) {
    return this.getProjects()
      .filter((item) => item.skills.find((skill) => skill.name === skillName))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  }

  async getProjectsByYear(root, { year }) {
    return this.getProjects()
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  }
}
