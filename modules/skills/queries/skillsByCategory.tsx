import skills from "../../../data/skills";

export default async (root:any, { category }: any) => {
  return skills.filter((item) => item.category === category);
};

