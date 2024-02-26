import studies from "../../../data/studies";
import YearUtils from "../../../utils/YearUtils";

export default async (root:any, { year }: any) => {

  return studies
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
