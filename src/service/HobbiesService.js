export class HobbiesService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  async getHobbies() {
    return this._dataClient.getHobbies();
  }
}
