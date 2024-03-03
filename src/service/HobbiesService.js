export class HobbiesService {
  constructor(dataClient) {
    this._dataClient = dataClient;
  }

  getHobbies() {
    return this._dataClient.getHobbies();
  }
}
