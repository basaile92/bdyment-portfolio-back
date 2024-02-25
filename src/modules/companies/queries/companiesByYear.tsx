import companies from "../../../data/companies";
import YearUtils from "../../../utils/YearUtils"

export default async (root:any, { year }: any) => {
  return companies
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
