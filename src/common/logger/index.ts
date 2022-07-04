import { Logger } from "winston";
import DevLogger from "./devLogger";
import ProdLogger from "./prodLogger";

let log: Logger;
if (process.env.NODE_ENV === "local") {
  log = DevLogger;
} else {
  log = ProdLogger;
}

export default log;
