"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogService = void 0;
const index_1 = __importDefault(require("./logger/index"));
const path = __importStar(require("path"));
const uuid_1 = require("uuid");
class LogService {
    /**
     * Log Info
     *
     * @static
     * @param {string} message message
     * @param {string} service? Service  name
     * @param {string} classname? caller class name
     * @param {string} methodname? call function name
     * @memberof LogService
     */
    static info(message, ...args) {
        if (args && args.length > 1) {
            const clname = path.basename(args[1]);
            index_1.default.info(message, {
                service: args[0],
                class: clname,
                methodname: args[2],
            });
        }
        else {
            index_1.default.info(message);
        }
    }
    /**
     * Log error
     *
     * @static
     * @param {string} message message
     * @param {string} service? Service  name
     * @param {string} classname? caller class name
     * @param {string} methodname? call function name
     * @memberof LogService
     */
    static error(message, ...args) {
        if (args && args.length > 1) {
            const clname = path.basename(args[1]);
            index_1.default.error(message, {
                service: args[0],
                class: clname,
                methodname: args[2],
            });
        }
        else {
            index_1.default.error(message);
        }
    }
    /**
     * Returns Request id for each api invoke
     *
     * @static
     * @returns {string}
     * @memberof LogUtility
     */
    static getRequestLogRef(req) {
        return uuid_1.v4();
    }
}
exports.LogService = LogService;
//# sourceMappingURL=logService.js.map