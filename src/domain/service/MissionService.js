import { YearUtils } from '../utils/YearUtils.js';

export class MissionService {
  constructor(portfolioDataPort) {
    this._portfolioDataPort = portfolioDataPort;
  }

  getMissions = () => {
    return this._portfolioDataPort.getMissions().sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };

  getMissionsBySkill = (root, { skillName }) => {
    return this.getMissions()
      .filter((item) => item.skills.find((skill) => skill.name === skillName))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };

  getMissionsByYear = (root, { year }) => {
    return this.getMissions()
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };
}
