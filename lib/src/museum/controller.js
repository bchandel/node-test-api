"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuseumController = void 0;
const index_1 = require("../common/index");
const custom_errors_1 = require("../common/interfaces/custom-errors");
const service_1 = __importDefault(require("./service"));
const log = index_1.LogService;
class MuseumController {
    /**
     * get Visitors count
     * @static
     * @param {*} req
     * @param {*} res
     * @param {*} next
     * @returns Visitors
     * @memberof MuseumController
     */
    static async get(req, res) {
        log.info('Entering MuseumController::get');
        const logRef = log.getRequestLogRef(req);
        try {
            log.info('req.method' + JSON.stringify(req.headers));
            const date = req.query.date;
            if (!date) {
                throw new custom_errors_1.BadRequestResult(index_1.errorCodeMap.InvalidRequest.value, index_1.errorCodeMap.InvalidRequest.description);
            }
            const results = await service_1.default.get(req.query);
            return res.json(results);
        }
        catch (error) {
            log.error('MuseumController::get' + JSON.stringify(error));
            return res.json(error);
        }
    }
}
exports.MuseumController = MuseumController;
//# sourceMappingURL=controller.js.map