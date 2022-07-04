import * as Express from 'express';
import { LogService, errorCodeMap } from '../common/index';
import { BadRequestResult } from '../common/interfaces/custom-errors';
import MuseumService from './service';
const log = LogService;

export class MuseumController {
  /**
   * get Visitors count
   * @static
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns Visitors
   * @memberof MuseumController
   */

  public static async get(req: Express.Request, res: Express.Response) {
    log.info('Entering MuseumController::get');
    const logRef = log.getRequestLogRef(req);
    try {
      log.info('req.method' + JSON.stringify(req.headers));
      const date = req.query.date;

      if (!date) {
        throw new BadRequestResult(
          errorCodeMap.InvalidRequest.value,
          errorCodeMap.InvalidRequest.description
        );
      }
      const results = await MuseumService.get(req.query);
      return res.status(200).json(results);
    } catch (error) {
      log.error('MuseumController::get' + JSON.stringify(error));
      return res.status(500).json(error);
    }
  }
}
