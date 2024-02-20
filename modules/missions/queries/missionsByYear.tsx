import missions from "../../../data/missions";
import YearUtils from "../../../utils/YearUtils"

export default async (root:any, { year }: any) => {
  return missions
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
