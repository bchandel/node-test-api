"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
const service_1 = __importDefault(require("../../src/museum/service"));
const helper_1 = require("../../src/museum/helper");
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
        let query;
        it('should return success response', async function () {
            spyOn(helper_1.Helper, 'get').and.returnValue(Promise.resolve(result));
            const data = await service_1.default.get(query);
            expect(service_1.default.get).toHaveBeenCalled();
        });
    });
});
//# sourceMappingURL=service.spec.js.map