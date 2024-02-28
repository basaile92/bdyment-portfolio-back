import description from "../../../data/description.js";


const computeAgeFrom = (date) => {
  const timeInMs = Date.now() - date.getTime();
  const timeInH = timeInMs / 1000 / 60 / 60;
  const timeInDay = timeInH / 24;
  const timeInYear = timeInDay / 365.25

  return {
    "timeInHour": Math.floor(timeInH),
    "timeInDay": Math.floor(timeInDay),
    "timeInYear": Math.floor(timeInYear)
  }
}

export default async () => {
  return {
    "photoInHTML": description.photoInHTML,
    "name": description.name,
    "age": computeAgeFrom(new Date(description.birthday)),
    "job": description.job,
    "linkedin":description.linkedin,
    "github":description.github,
    "presentation":description.presentation,
  };
};
