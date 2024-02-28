import certificates from "../../../data/certificates.js";
import YearUtils from "../../../utils/YearUtils.js";

export default async (root, { skill }) => {
  return certificates.filter((certificate) => certificate.skill === skill).sort(YearUtils.compareItemsByYear);
};

