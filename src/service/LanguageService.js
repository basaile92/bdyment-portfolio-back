export class LanguageService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  async getLanguages() {
    return this._dataClient.getLanguages();
  }
}
