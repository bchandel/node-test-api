/* eslint-disable prettier/prettier */
import * as Express from 'express';
import { MuseumController } from '../../src/museum/controller';
import MuseumService from '../../src/museum/service';

describe('MuseumController Class', function () {
   let originalTimeout;
   beforeAll(function () {
     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
     jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
   });
 
   afterAll(function () {
     jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
   });
  describe('MuseumController get method', function () {
      let response: Express.Response;
      let request;

      const result = {
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
      };
      const errorResp = {
         "errorCode": "InvalidRequest",
         "description": "The request payload is invalid and does not adhere to specification",
         
      };

      it('should return success response', async function () {
         
         request  = {
            query: { 'date': 1404198000000}
         };
      
         spyOn(MuseumService, 'get').and.returnValue(Promise.resolve(result));
         const data = await MuseumController.get(request, response);
         expect(MuseumService.get).toHaveBeenCalled();
      });

      it('should give error', async function () {
         request  = {
            query:  {}
         };
         const data = await MuseumController.get(request, response);
         console.log("data of error", data);
         expect(data['status']).toEqual(500);
      });
  });
});
