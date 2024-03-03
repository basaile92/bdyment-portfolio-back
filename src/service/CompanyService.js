import { YearUtils } from '../utils/YearUtils.js';

export class CompanyService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  getCompanies = () => {
    return this._dataClient.getCompanies().sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };

  getCompaniesByYear = (root, { year }) => {
    return this.getCompanies()
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  };
}
