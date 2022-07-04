import * as Express from 'express';
import { MuseumController } from './controller';

export const codeRoute = (app: Express.Application) => {
  app.get('/api/visitors', MuseumController.get);
};
