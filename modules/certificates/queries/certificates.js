import certificates from "../../../data/certificates.js";
import YearUtils from "../../../utils/YearUtils.js";

export default async () => {
  return certificates.sort(YearUtils.compareItemsByYear);
};
