import studies from "../../../data/studies";
import YearUtils from "../../../utils/YearUtils";

export default async () => {
  return studies.sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
