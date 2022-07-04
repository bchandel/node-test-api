"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const devLogger_1 = __importDefault(require("./devLogger"));
const prodLogger_1 = __importDefault(require("./prodLogger"));
let log;
if (process.env.NODE_ENV === "local") {
    log = devLogger_1.default;
}
else {
    log = prodLogger_1.default;
}
exports.default = log;
//# sourceMappingURL=index.js.map