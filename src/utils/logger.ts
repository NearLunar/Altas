// Setup Winston logger
import { createLogger, format, transports } from "winston";

import { env } from "@/env";

const isProduction = env.NODE_ENV === "production";

const devFormat = format.combine(
    format.colorize(),
    format.timestamp(),
    format.simple(),
    format.printf((info) => {
        const { timestamp, level, message, ...args } = info as {
            timestamp: string;
            level: string;
            message: string;
            [key: string]: unknown;
        };

        const ts = timestamp.slice(0, 19).replace("T", " ");
        return `${ts} [${level}]: ${message.trim()} ${
            Object.keys(args).length ? JSON.stringify(args, null, 2) : ""
        }`;
    }),
);

export const logger = createLogger({
    level: isProduction ? "info" : "debug",
    format: format.combine(format.timestamp(), format.json()),
    transports: [
        new transports.Console({
            format: devFormat,
        }),
    ],
});
