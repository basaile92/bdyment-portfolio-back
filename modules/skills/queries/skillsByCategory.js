import projects from "../../../data/projects.js";
import missions from "../../../data/missions.js";

export default async (root, { category }) => {
  const skillsProjects =
      projects.flatMap(project => project.skills);
  const skillsMissions = missions.flatMap(mission => mission.skills);
  const allSkills = skillsProjects.concat(skillsMissions);
  return [...new Map(allSkills.map(item => [item.name, item])).values()]
      .filter((item) => item.category === category);
};

