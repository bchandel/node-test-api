import * as winston from "winston";

const format = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  winston.format.errors({ stack: true }),
  winston.format.simple()
);

const transports = [
  new winston.transports.Console({
    level: "debug",
    handleExceptions: true,
  }),
];

const DevLogger = winston.createLogger({
  format,
  transports,
});

export default DevLogger;
