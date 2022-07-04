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
exports.Server = void 0;
const BodyParser = __importStar(require("body-parser"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const settings_1 = require("./settings");
const winston_1 = __importDefault(require("winston"));
const log = winston_1.default.createLogger({
    transports: [new winston_1.default.transports.Console({})],
});
class Server {
    constructor() {
        this.app = express_1.default();
        this.setConfig();
        this.setRoutes();
    }
    start() {
        this.app.listen(settings_1.settings.PORT);
        log.info(`Server started at ${settings_1.settings.PORT}`);
    }
    setConfig() {
        this.app.use('/', express_1.default.static(settings_1.settings.PUBLIC_PATH));
        this.app.use(BodyParser.json());
    }
    setRoutes() {
        routes_1.initRoutes(this.app);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map