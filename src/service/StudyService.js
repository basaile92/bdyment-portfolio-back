import { YearUtils } from '../utils/YearUtils.js';

export class StudyService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  async getStudies() {
    return this._dataClient.getStudies().sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  }

  async getStudiesByYear(root, { year }) {
    return this.getStudies()
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  }
}
