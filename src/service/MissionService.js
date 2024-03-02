import { YearUtils } from '../utils/YearUtils.js';

export class MissionService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  async getMissions() {
    return this._dataClient.getMissions().sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  }

  async getMissionsBySkill(root, { skillName }) {
    return this.getMissions()
      .filter((item) => item.skills.find((skill) => skill.name === skillName))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  }

  async getMissionsByYear(root, { year }) {
    return new this.getMissions()
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  }
}
