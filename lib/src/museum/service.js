"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../common/index");
const helper_1 = require("./helper");
const log = index_1.LogService;
class MuseumService {
    /**
     * Get Museum Data from https://data.lacity.org
     * @static
     * @param {*} query
     * @param {*} logRef
     * @returns Museum Data
     * @memberof MuseumService
     */
    static async get(query) {
        log.info('Enterig MuseumService::get');
        let response;
        try {
            log.info('Enterig MuseumService::get - Getting data');
            const museumData = await helper_1.Helper.get(query);
            response = await helper_1.Helper.constructVisitorsResp(query, museumData);
            return response;
        }
        catch (error) {
            log.error('Exiting MuseumService::get' + JSON.stringify(error));
            throw error;
        }
    }
}
exports.default = MuseumService;
//# sourceMappingURL=service.js.map