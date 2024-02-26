import projects from "../../../data/projects";
import YearUtils from "../../../utils/YearUtils"

export default async (root:any, { skillName }: any) => {
  return projects
      .filter((item) => item.skills.find(skill => skill.name === skillName))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
