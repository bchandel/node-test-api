import * as Express from 'express';
import { codeRoute } from '../museum/handler';
const cors = require('cors');

const corsOptions = {
  origin: '*',
  methods: ['POST', 'GET', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

export const initRoutes = (app: Express.Application) => {
  app.use(cors(corsOptions));
  codeRoute(app);
};
