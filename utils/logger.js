import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info", // ← LEVEL: show info and above
  format: format.combine(
    // ← FORMAT: stack recipes together
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf(
      ({ level, message, timestamp }) =>
        `${timestamp} [${level.toUpperCase()}] ${message}`,
    ),
  ),
  transports: [
    // ← TRANSPORT: where lines go
    new transports.Console(), // show in terminal
    new transports.File({ filename: "logs/test-execution.log" }), // save to file
  ],
});

export default logger;
