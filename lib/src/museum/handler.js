"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeRoute = void 0;
const controller_1 = require("./controller");
const codeRoute = (app) => {
    app.get('/api/visitors', controller_1.MuseumController.get);
};
exports.codeRoute = codeRoute;
//# sourceMappingURL=handler.js.map