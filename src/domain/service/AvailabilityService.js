export class AvailabilityService {
  constructor (jsonPortfolioDataRetriever) {
    this._jsonPortfolioDataRetriever = jsonPortfolioDataRetriever;
  }

  getAvailability = () => {
    return this._jsonPortfolioDataRetriever.getAvailability();
  };
}
