import { YearUtils } from '../utils/YearUtils.js';

export class StudyService {
  constructor(jsonPortfolioDataRetriever) {
    this._jsonPortfolioDataRetriever = jsonPortfolioDataRetriever;
  }

  getStudies = () => {
    return this._jsonPortfolioDataRetriever.getStudies().sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };

  getStudiesByYear = (root, { year }) => {
    return this.getStudies()
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };
}
