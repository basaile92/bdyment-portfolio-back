import { YearUtils } from '../utils/YearUtils.js';

export class CertificateService {
  constructor(portfolioDataPort) {
    this._portfolioDataPort = portfolioDataPort;
  }

  getCertificates = () => this._portfolioDataPort.getCertificates();

  getCertificatesBySkill = (root, { skill }) => {
    return this.getCertificates()
      .filter((certificate) => certificate.skill === skill)
      .sort(YearUtils.compareItemsByYear);
  };
}
