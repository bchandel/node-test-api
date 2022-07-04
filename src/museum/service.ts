import { LogService } from '../common/index';
import { Helper } from './helper';
const log = LogService;

export default class MuseumService {
  /**
   * Get Museum Data from https://data.lacity.org
   * @static
   * @param {*} query
   * @param {*} logRef
   * @returns Museum Data
   * @memberof MuseumService
   */

  public static async get(query: any) {
    log.info('Enterig MuseumService::get');
    let response;
    try {
      log.info('Enterig MuseumService::get - Getting data');
      const museumData = await Helper.get(query);
      response = await Helper.constructVisitorsResp(query, museumData);
      return response;
    } catch (error) {
      log.error('Exiting MuseumService::get' + JSON.stringify(error));
      throw error;
    }
  }
}
