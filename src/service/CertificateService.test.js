import { describe, expect, it, jest, test } from '@jest/globals';
import { YearUtils } from '../utils/YearUtils.js';
import { DataClient } from '../client/DataClient.js';
import { CertificateService } from './CertificateService.js';

const SKILL_TO_SEARCH = 'skillToSearch';
const CERTIFICATE_1 = { certifier: 'certifier1', skill: SKILL_TO_SEARCH, year: '1', link: 'link1' };
const CERTIFICATE_2 = { certifier: 'certifier2', skill: SKILL_TO_SEARCH, year: '2', link: 'link2' };
const CERTIFICATE_3 = { certifier: 'certifier3', skill: 'skill3', year: '3', link: 'link3' };
const CERTIFICATES = [CERTIFICATE_1, CERTIFICATE_2, CERTIFICATE_3];

let compareItemsByYearSpy, certificateService;
const dataClient = new DataClient();
jest.spyOn(dataClient, 'getCertificates').mockImplementation(() => CERTIFICATES);
compareItemsByYearSpy = jest.spyOn(YearUtils, 'compareItemsByYear').mockImplementation(() => 1);
certificateService = new CertificateService(dataClient);

describe('getCertificates', () => {
  it('should return all existing certificates in the right order', async () => {
    let expected = CERTIFICATES;
    let result = await certificateService.getCertificates();
    expect(result).toEqual(expected);
  });
});

describe('getCertificatesBySkill', () => {
  it('should return the correct certificates for a given skill in the right order', async () => {
    let skill = SKILL_TO_SEARCH;
    let expected = [CERTIFICATE_1, CERTIFICATE_2];
    let result = await certificateService.getCertificatesBySkill({}, { skill });
    expect(result).toEqual(expected);
  });

  it('should return an empty array for an unknown skill', async () => {
    let skill = 'unknownSkill';
    let expected = [];
    let result = await certificateService.getCertificatesBySkill({}, { skill });
    expect(result).toEqual(expected);
  });
});
