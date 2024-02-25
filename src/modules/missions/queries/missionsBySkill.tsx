import missions from "../../../data/missions";
import YearUtils from "../../../utils/YearUtils"

export default async (root:any, { skillName }: any) => {
  return missions
      .filter((item) => item.skills.find(skill => skill.name === skillName))
      .sort(YearUtils.compareItemsByStartYearAndEndYearAndIsCurrent);
};
