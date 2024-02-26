import studies from "../../../data/studies.js";
import YearUtils from "../../../utils/YearUtils.js";

export default async () => {
  return studies.sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
