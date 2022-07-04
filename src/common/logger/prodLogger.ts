import * as winston from "winston";

const format = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }),
  winston.format.json()
);

const transports = [new winston.transports.Console()];

const ProdLogger = winston.createLogger({
  format,
  transports,
});

export default ProdLogger;
