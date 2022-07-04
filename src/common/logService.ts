import logger from "./logger/index";
import * as path from "path";
import { v4 as uuidv4 } from "uuid";
import Express from "express";

export class LogService {
  /**
   * Log Info
   *
   * @static
   * @param {string} message message
   * @param {string} service? Service  name
   * @param {string} classname? caller class name
   * @param {string} methodname? call function name
   * @memberof LogService
   */

  public static info(message: any, ...args: any) {
    if (args && args.length > 1) {
      const clname = path.basename(args[1]);
      logger.info(message, {
        service: args[0],
        class: clname,
        methodname: args[2],
      });
    } else {
      logger.info(message);
    }
  }

  /**
   * Log error
   *
   * @static
   * @param {string} message message
   * @param {string} service? Service  name
   * @param {string} classname? caller class name
   * @param {string} methodname? call function name
   * @memberof LogService
   */

  public static error(message: any, ...args: any) {
    if (args && args.length > 1) {
      const clname = path.basename(args[1]);
      logger.error(message, {
        service: args[0],
        class: clname,
        methodname: args[2],
      });
    } else {
      logger.error(message);
    }
  }

  /**
   * Returns Request id for each api invoke
   *
   * @static
   * @returns {string}
   * @memberof LogUtility
   */
  public static getRequestLogRef(req?: Express.Request): string {
    return uuidv4();
  }
}
