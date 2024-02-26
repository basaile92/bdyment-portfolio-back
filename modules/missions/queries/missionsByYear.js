import missions from "../../../data/missions.js";
import YearUtils from "../../../utils/YearUtils.js"

export default async (root, { year }) => {
  return missions
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
