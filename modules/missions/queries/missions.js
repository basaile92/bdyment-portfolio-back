import missions from "../../../data/missions.js";
import YearUtils from "../../../utils/YearUtils.js";

export default async () => {
  return missions.sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
