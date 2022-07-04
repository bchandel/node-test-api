"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoutes = void 0;
const handler_1 = require("../museum/handler");
const cors = require('cors');
const corsOptions = {
    origin: '*',
    methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
const initRoutes = (app) => {
    app.use(cors(corsOptions));
    handler_1.codeRoute(app);
};
exports.initRoutes = initRoutes;
//# sourceMappingURL=index.js.map