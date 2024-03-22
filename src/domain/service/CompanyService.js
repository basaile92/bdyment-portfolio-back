import { YearUtils } from '../utils/YearUtils.js';

export class CompanyService {
  constructor(jsonPortfolioDataRetriever) {
    this._jsonPortfolioDataRetriever = jsonPortfolioDataRetriever;
  }

  getCompanies = () => {
    return this._jsonPortfolioDataRetriever.getCompanies().sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };

  getCompaniesByYear = (root, { year }) => {
    return this.getCompanies()
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };
}
