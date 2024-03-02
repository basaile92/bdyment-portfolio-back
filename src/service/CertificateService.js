import { YearUtils } from '../utils/YearUtils.js';

export class CertificateService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  async getCertificates() {
    return this._dataClient.getCertificates();
  }

  async getCertificatesBySkill(root, { skill }) {
    return this.getCertificates()
      .filter((certificate) => certificate.skill === skill)
      .sort(YearUtils.compareItemsByYear);
  }
}
