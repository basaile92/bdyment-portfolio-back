import { YearUtils } from '../utils/YearUtils.js';

export class StudyService {
  constructor(portfolioDataPort) {
    this._portfolioDataPort = portfolioDataPort;
  }

  getStudies = () => {
    return this._portfolioDataPort.getStudies().sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };

  getStudiesByYear = (root, { year }) => {
    return this.getStudies()
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };
}
