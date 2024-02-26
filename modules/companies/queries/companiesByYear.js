import companies from "../../../data/companies.js";
import YearUtils from "../../../utils/YearUtils.js"

export default async (root, { year }) => {
  return companies
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
