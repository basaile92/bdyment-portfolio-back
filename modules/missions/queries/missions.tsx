import missions from "../../../data/missions";
import YearUtils from "../../../utils/YearUtils";

export default async () => {
  return missions.sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
