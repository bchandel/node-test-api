import { LogService } from '../common/index';
import { VisitorRespFormat } from '../common/interfaces/visitorRespFormat';
import moment from 'moment';
import axios from 'axios';
import ms from 'millisecond';
const log = LogService;

export class Helper {
  /**
   * get Museum Data
   * @static
   * @param {*} query
   * @returns Museum Data
   * @memberof Helper
   */

  public static async get(query: any) {
    log.info('Entering Helper::get');
    try {
      const response = await axios({
        url: 'https://data.lacity.org/resource/trxm-jn3c.json',
        method: 'GET',
        data: {
          limit: 5000,
          app_token: 'U2O5FsKrKQDUZyO4Fykstx7XJ',
        },
      });
      const filterResponse = await Helper.filterMuseumResponse(
        query,
        response.data
      );
      return filterResponse;
    } catch (error) {
      log.error('Helper::get' + JSON.stringify(error));
      throw error;
    }
  }

  public static async filterMuseumResponse(query: any, museumData: any) {
    log.info('Entering Helper::filterMuseumResponse');
    try {
      const date = query.date;
      const data = museumData.filter(function (x) {
        const getMonth = x.month.split('T');
        if (getMonth[0] == moment(ms(date + ' ms')).format('YYYY-MM-DD')) {
          return x;
        }
      });
      return data;
    } catch (error) {
      log.error('Helper::filterMuseumResponse' + JSON.stringify(error));
      throw error;
    }
  }

  /**
   * Visitors Count
   * @static
   * @param {*} query
   * @param {*} museumData
   * @returns Visitors Count Object
   * @memberof Helper
   */

  public static async constructVisitorsResp(query: any, museumData: any) {
    log.info('Entering Helper::constructVisitorsResp');
    try {
      const ignore = query.ignore;
      let min = await Helper.setMinCountVal(ignore, museumData);
      let max = 0;
      let count = 0;
      let highest: any = {};
      let lowest: any = {};
      let ignored: any = {};
      let month;
      let year;
      for (let i = 0; i < museumData.length; i++) {
        for (const key in museumData[i]) {
          if (ignore && key == ignore) {
            ignored = {
              museum: key,
              visitors: museumData[i][key],
            };
          } else {
            if (key !== 'month') {
              if (parseInt(museumData[i][key]) > max) {
                max = parseInt(museumData[i][key]);
                highest = {
                  museum: key,
                  visitors: parseInt(museumData[i][key]),
                };
              }
              if (parseInt(museumData[i][key]) < min) {
                min = parseInt(museumData[i][key]);
                lowest = {
                  museum: key,
                  visitors: parseInt(museumData[i][key]),
                };
              }
              count = count + parseInt(museumData[i][key]);
            } else {
              month = moment(museumData[i][key]).format('MMMM');
              year = moment(museumData[i][key]).year();
            }
          }
        }
      }
      const visitorCountResp: VisitorRespFormat = {
        attendance: {
          month: month,
          year: year,
          highest: highest,
          lowest: lowest,
          total: count,
        },
      };
      if (query.ignore) visitorCountResp.attendance['ignored'] = ignored;
      return visitorCountResp;
    } catch (error) {
      log.error('Helper::constructVisitorsResp' + JSON.stringify(error));
      throw error;
    }
  }

  public static async setMinCountVal(ignore, museumData: any) {
    log.info('Entering Helper::setMinCountVal');
    let minVal = 0;
    for (let i = 0; i < 1; i++) {
      for (const key in museumData[i]) {
        if (ignore && key !== ignore && key !== 'month') {
          minVal = parseInt(museumData[i][key]);
          break;
        } else if (key !== 'month') {
          minVal = parseInt(museumData[i][key]);
          break;
        }
      }
    }
    log.info('Exiting Helper::setMinCountVal');
    return minVal;
  }
}
