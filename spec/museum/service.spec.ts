/* eslint-disable prettier/prettier */
import  MuseumService  from '../../src/museum/service';
import { Helper } from '../../src/museum/helper';

describe('MuseumService Class', function () {
  let originalTimeout;
  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
  describe('MuseumService get method', function () {
    const result = [
      {
        "attendance": {
           "month": "July",
           "year": 2014,
           "highest": {
              "museum": "avila_adobe",
              "visitors": 32378
           },
           "lowest": {
              "museum": "hellman_quon",
              "visitors": 120
           },
           "total": 60535
        }
      }
    ];
    let query: { 'date': 1404198000000};
    it('should return success response', async function () {
      spyOn(Helper,'get').and.returnValue(Promise.resolve(result));
      const data = await MuseumService.get(query);
      expect(MuseumService.get).toHaveBeenCalled();
    });
  });
});
