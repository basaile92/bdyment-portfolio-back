export class AvailabilityService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  getAvailability = () => {
    return this._dataClient.getAvailability();
  };
}
