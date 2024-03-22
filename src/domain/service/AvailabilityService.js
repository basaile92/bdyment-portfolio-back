export class AvailabilityService {
  constructor(portfolioDataPort) {
    this._portfolioDataPort = portfolioDataPort;
  }

  getAvailability = () => {
    return this._portfolioDataPort.getAvailability();
  };
}
