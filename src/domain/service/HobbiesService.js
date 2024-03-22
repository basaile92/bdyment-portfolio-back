export class HobbiesService {
  constructor(portfolioDataPort) {
    this._portfolioDataPort = portfolioDataPort;
  }

  getHobbies = () => {
    return this._portfolioDataPort.getHobbies();
  };
}
