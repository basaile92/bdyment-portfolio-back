export class LanguageService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  async getLanguages() {
    return await this._dataClient.getLanguages();
  }
}
