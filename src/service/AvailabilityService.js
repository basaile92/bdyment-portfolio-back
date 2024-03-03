export class AvailabilityService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  getAvailability = () => this._dataClient.getAvailability();
}
