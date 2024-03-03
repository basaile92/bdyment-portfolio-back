import { YearUtils } from "../utils/YearUtils.js";

export class StudyService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  getStudies() {
    return this._dataClient.getStudies().sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  }

  getStudiesByYear(root, { year }) {
    return this.getStudies()
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
  }
}
