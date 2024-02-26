import projects from "../../../data/projects.js";
import YearUtils from "../../../utils/YearUtils.js"

export default async (root, { skillName }) => {
  return projects
      .filter((item) => item.skills.find(skill => skill.name === skillName))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
