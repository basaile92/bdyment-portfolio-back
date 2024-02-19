import studies from "../../../data/studies";

export default async (root:any, { year }: any) => {

  const compareStudies = (study1: any, study2: any) => {
    const endYearComparison = study2.endYear - study1.endYear;
    if(endYearComparison == 0)
      return study2.startYear - study1.startYear

    return endYearComparison;
  }



  return studies
      .filter((item) => item.startYear <= year && item.endYear >= year)
      .sort(compareStudies);
};
