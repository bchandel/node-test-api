"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("../../src/museum/controller");
const service_1 = __importDefault(require("../../src/museum/service"));
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
        let response;
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
            request = {
                query: { 'date': 1404198000000 }
            };
            spyOn(service_1.default, 'get').and.returnValue(Promise.resolve(result));
            const data = await controller_1.MuseumController.get(request, response);
            expect(service_1.default.get).toHaveBeenCalled();
            //expect(data).toContain('total');
        });
        it('should give error', async function () {
            request = {
                query: {}
            };
            const data = await controller_1.MuseumController.get(request, response);
            console.log("data of error", data);
            expect(data['status']).toEqual(500);
        });
    });
});
//# sourceMappingURL=controller.spec.js.map