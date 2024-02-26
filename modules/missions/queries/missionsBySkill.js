import missions from "../../../data/missions.js";
import YearUtils from "../../../utils/YearUtils.js"

export default async (root, { skillName }) => {
  return missions
      .filter((item) => item.skills.find(skill => skill.name === skillName))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
