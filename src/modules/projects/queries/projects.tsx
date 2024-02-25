import projects from "../../../data/projects";
import YearUtils from "../../../utils/YearUtils";

export default async () => {
  return projects.sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
