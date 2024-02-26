import studies from "../../../data/studies.js";
import YearUtils from "../../../utils/YearUtils.js";

export default async (root, { year }) => {

  return studies
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
