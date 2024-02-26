import companies from "../../../data/companies.js";
import YearUtils from "../../../utils/YearUtils.js";

export default async () => {
  return companies.sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
