export class LanguageService {
  constructor (jsonPortfolioDataRetriever) {
    this._jsonPortfolioDataRetriever = jsonPortfolioDataRetriever;
  }

  getLanguages = () => {
    return this._jsonPortfolioDataRetriever.getLanguages();
  };
}
