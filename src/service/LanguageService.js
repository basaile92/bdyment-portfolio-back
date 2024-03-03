export class LanguageService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  getLanguages = () => {
    return this._dataClient.getLanguages();
  };
}
