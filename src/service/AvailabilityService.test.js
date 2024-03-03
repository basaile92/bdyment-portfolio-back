import { describe, expect, jest, test } from "@jest/globals";
import { DataClient } from "../client/DataClient.js";
import { AvailabilityService } from "./AvailabilityService.js";

const AVAILABILITY = { date: '1992-12-29' };

let availabilityService;
const dataClient = new DataClient();
jest.spyOn(dataClient, 'getAvailability').mockImplementation(() => AVAILABILITY);
availabilityService = new AvailabilityService(dataClient);

describe('getAvailability', () => {
  test('should return availability', () => {
    let expected = AVAILABILITY;
    let result = availabilityService.getAvailability();
    expect(result).toEqual(expected);
  });
});
