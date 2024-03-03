import { YearUtils } from '../utils/YearUtils.js';

export class CertificateService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  getCertificates() {
    return this._dataClient.getCertificates();
  }

  getCertificatesBySkill(root, { skill }) {
    return this.getCertificates()
      .filter((certificate) => certificate.skill === skill)
      .sort(YearUtils.compareItemsByYear);
  }
}
