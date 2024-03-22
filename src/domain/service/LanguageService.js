export class LanguageService {
  constructor(portfolioDataPort) {
    this._portfolioDataPort = portfolioDataPort;
  }

  getLanguages = () => {
    return this._portfolioDataPort.getLanguages();
  };
}
