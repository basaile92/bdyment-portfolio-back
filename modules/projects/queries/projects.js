import projects from "../../../data/projects.js";
import YearUtils from "../../../utils/YearUtils.js";

export default async () => {
  return projects.sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
