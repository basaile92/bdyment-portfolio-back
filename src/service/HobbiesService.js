export class HobbiesService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  async getHobbies() {
    return await this._dataClient.getHobbies();
  }
}
