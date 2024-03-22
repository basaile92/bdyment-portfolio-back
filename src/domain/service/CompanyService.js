import { YearUtils } from '../utils/YearUtils.js';

export class CompanyService {
  constructor(portfolioDataPort) {
    this._portfolioDataPort = portfolioDataPort;
  }

  getCompanies = () => {
    return this._portfolioDataPort.getCompanies().sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };

  getCompaniesByYear = (root, { year }) => {
    return this.getCompanies()
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };
}
