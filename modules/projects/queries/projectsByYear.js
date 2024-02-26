import projects from "../../../data/projects.js";
import YearUtils from "../../../utils/YearUtils.js"

export default async (root, { year }) => {
  return projects
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
