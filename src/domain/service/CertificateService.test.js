import { describe, expect, jest, test } from '@jest/globals';
import { CertificateService } from './CertificateService.js';
import { PortfolioDataPort } from '../port/PortfolioDataPort.js';
import { YearUtils } from '../utils/YearUtils.js';

const SKILL_TO_SEARCH = 'skillToSearch';
const CERTIFICATE_1 = { certifier: 'certifier1', skill: SKILL_TO_SEARCH, year: '1', link: 'link1' };
const CERTIFICATE_2 = { certifier: 'certifier2', skill: SKILL_TO_SEARCH, year: '2', link: 'link2' };
const CERTIFICATE_3 = { certifier: 'certifier3', skill: 'skill3', year: '3', link: 'link3' };
const CERTIFICATES = [CERTIFICATE_1, CERTIFICATE_2, CERTIFICATE_3];

let compareItemsByYearSpy, certificateService;
const portfolioDataPort = new PortfolioDataPort();
jest.spyOn(portfolioDataPort, 'getCertificates').mockImplementation(() => CERTIFICATES);
compareItemsByYearSpy = jest.spyOn(YearUtils, 'compareItemsByYear').mockImplementation(() => 1);
certificateService = new CertificateService(portfolioDataPort);

describe('getCertificates', () => {
  test('should return all existing certificates in the right order', () => {
    let expected = CERTIFICATES;
    let result = certificateService.getCertificates();
    expect(result).toEqual(expected);
  });
});

describe('getCertificatesBySkill', () => {
  test('should return the correct certificates for a given skill in the right order', () => {
    let skill = SKILL_TO_SEARCH;
    let expected = [CERTIFICATE_1, CERTIFICATE_2];
    let result = certificateService.getCertificatesBySkill({}, { skill });
    expect(result).toEqual(expected);
  });

  test('should return an empty array for an unknown skill', () => {
    let skill = 'unknownSkill';
    let expected = [];
    let result = certificateService.getCertificatesBySkill({}, { skill });
    expect(result).toEqual(expected);
  });
});
