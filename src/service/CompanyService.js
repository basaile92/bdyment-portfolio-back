import { YearUtils } from '../utils/YearUtils.js';

export class CompanyService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  async getCompanies() {
    return this._dataClient.getCompanies().sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  }

  async getCompaniesByYear(root, { year }) {
    return this.getCompanies()
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  }
}
