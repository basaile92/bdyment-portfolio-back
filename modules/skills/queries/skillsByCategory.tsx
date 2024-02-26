import projects from "../../../data/projects";
import missions from "../../../data/missions";

export default async (root:any, { category }: any) => {
  const skillsProjects =
      projects.flatMap(project => project.skills);
  const skillsMissions = missions.flatMap(mission => mission.skills);
  const allSkills = skillsProjects.concat(skillsMissions);
  return [...new Map(allSkills.map(item => [item.name, item])).values()]
      .filter((item) => item.category === category);
};

