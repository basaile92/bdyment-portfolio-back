export class HobbiesService {
  constructor (jsonPortfolioDataRetriever) {
    this._jsonPortfolioDataRetriever = jsonPortfolioDataRetriever;
  }

  getHobbies = () => {
    return this._jsonPortfolioDataRetriever.getHobbies();
  };
}
