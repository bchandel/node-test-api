import * as BodyParser from 'body-parser';
import express from 'express';

import { initRoutes } from './routes';
import { settings } from './settings';

import winston from 'winston';

const log = winston.createLogger({
  transports: [new winston.transports.Console({})],
});

export class Server {
  public app: express.Application;
  public rout: express.Router;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setRoutes();
  }

  public start() {
    this.app.listen(settings.PORT);
    log.info(`Server started at ${settings.PORT}`);
  }

  private setConfig() {
    this.app.use('/', express.static(settings.PUBLIC_PATH));
    this.app.use(BodyParser.json());
  }

  private setRoutes() {
    initRoutes(this.app);
  }
}
