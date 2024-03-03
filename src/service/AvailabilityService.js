export class AvailabilityService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  async getAvailability() {
    return this._dataClient.getAvailability();
  }
}
