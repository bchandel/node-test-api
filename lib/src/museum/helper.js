"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const index_1 = require("../common/index");
const moment_1 = __importDefault(require("moment"));
const axios_1 = __importDefault(require("axios"));
const millisecond_1 = __importDefault(require("millisecond"));
const log = index_1.LogService;
class Helper {
    /**
     * get Museum Data
     * @static
     * @param {*} query
     * @returns Museum Data
     * @memberof Helper
     */
    static async get(query) {
        log.info('Entering Helper::get');
        try {
            const response = await axios_1.default({
                url: 'https://data.lacity.org/resource/trxm-jn3c.json',
                method: 'GET',
                data: {
                    limit: 5000,
                    app_token: 'U2O5FsKrKQDUZyO4Fykstx7XJ',
                },
            });
            const filterResponse = await Helper.filterMuseumResponse(query, response.data);
            return filterResponse;
        }
        catch (error) {
            log.error('Helper::get' + JSON.stringify(error));
            throw error;
        }
    }
    static async filterMuseumResponse(query, museumData) {
        log.info('Entering Helper::filterMuseumResponse');
        try {
            const date = query.date;
            const data = museumData.filter(function (x) {
                const getMonth = x.month.split('T');
                if (getMonth[0] == moment_1.default(millisecond_1.default(date + ' ms')).format('YYYY-MM-DD')) {
                    return x;
                }
            });
            return data;
        }
        catch (error) {
            log.error('Helper::filterMuseumResponse' + JSON.stringify(error));
            throw error;
        }
    }
    /**
     * Visitors Count
     * @static
     * @param {*} query
     * @param {*} museumData
     * @returns Visitors Count Object
     * @memberof Helper
     */
    static async constructVisitorsResp(query, museumData) {
        log.info('Entering Helper::constructVisitorsResp');
        try {
            const ignore = query.ignore;
            let min = await Helper.setMinCountVal(ignore, museumData);
            let max = 0;
            let count = 0;
            let highest = {};
            let lowest = {};
            let ignored = {};
            let month;
            let year;
            for (let i = 0; i < museumData.length; i++) {
                for (const key in museumData[i]) {
                    if (ignore && key == ignore) {
                        ignored = {
                            museum: key,
                            visitors: museumData[i][key],
                        };
                    }
                    else {
                        if (key !== 'month') {
                            if (parseInt(museumData[i][key]) > max) {
                                max = parseInt(museumData[i][key]);
                                highest = {
                                    museum: key,
                                    visitors: parseInt(museumData[i][key]),
                                };
                            }
                            if (parseInt(museumData[i][key]) < min) {
                                min = parseInt(museumData[i][key]);
                                lowest = {
                                    museum: key,
                                    visitors: parseInt(museumData[i][key]),
                                };
                            }
                            count = count + parseInt(museumData[i][key]);
                        }
                        else {
                            month = moment_1.default(museumData[i][key]).format('MMMM');
                            year = moment_1.default(museumData[i][key]).year();
                        }
                    }
                }
            }
            const visitorCountResp = {
                attendance: {
                    month: month,
                    year: year,
                    highest: highest,
                    lowest: lowest,
                    total: count,
                },
            };
            if (query.ignore)
                visitorCountResp.attendance['ignored'] = ignored;
            return visitorCountResp;
        }
        catch (error) {
            log.error('Helper::constructVisitorsResp' + JSON.stringify(error));
            throw error;
        }
    }
    static async setMinCountVal(ignore, museumData) {
        log.info('Entering Helper::setMinCountVal');
        let minVal = 0;
        for (let i = 0; i < 1; i++) {
            for (const key in museumData[i]) {
                if (ignore && key !== ignore && key !== 'month') {
                    minVal = parseInt(museumData[i][key]);
                    break;
                }
                else if (key !== 'month') {
                    minVal = parseInt(museumData[i][key]);
                    break;
                }
            }
        }
        log.info('Exiting Helper::setMinCountVal');
        return minVal;
    }
}
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map