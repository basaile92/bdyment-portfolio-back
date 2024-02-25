import companies from "../../../data/companies";
import YearUtils from "../../../utils/YearUtils";

export default async () => {
  return companies.sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
