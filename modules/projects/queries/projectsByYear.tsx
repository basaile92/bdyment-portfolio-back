import projects from "../../../data/projects";
import YearUtils from "../../../utils/YearUtils"

export default async (root:any, { year }: any) => {
  return projects
      .filter((item) => YearUtils.filterItemsByYear(item, year))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
