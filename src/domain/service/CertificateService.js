import { YearUtils } from "../utils/YearUtils.js";

export class CertificateService {
  constructor (jsonPortfolioDataRetriever) {
    this._jsonPortfolioDataRetriever = jsonPortfolioDataRetriever;
  }

  getCertificates = () => this._jsonPortfolioDataRetriever.getCertificates();

  getCertificatesBySkill = (root, { skill }) => {
    return this.getCertificates()
      .filter((certificate) => certificate.skill === skill)
      .sort(YearUtils.compareItemsByYear);
  };
}
