import type { LoggerPort } from "@altas/core";
import { injectable } from "inversify";
import type { Logger } from "winston";
import { createLogger, format, transports } from "winston";

@injectable()
export class ConsoleLogger implements LoggerPort {
    private readonly logger: Logger;

    constructor(serviceID: string) {
        this.logger = createLogger({
            level: process.env.NODE_ENV !== "production" ? "debug" : "info",
            format: format.json(),
            defaultMeta: { service: `com.nearlunar.altas.${serviceID}` },
            transports: [
                new transports.File({ filename: "error.log", level: "error" }),
                new transports.File({ filename: "combined.log" }),
            ],
        });

        this.logger.add(
            new transports.Console({
                format: format.combine(
                    format.timestamp(),
                    format.printf(
                        (info) =>
                            `${info.timestamp} | ${
                                info.service
                            } | ${info.level.toUpperCase()} | ${info.message}`,
                    ),
                    format.colorize({ all: true }),
                ),
            }),
        );
    }

    debug(message: string, ...meta: unknown[]): void {
        this.logger.debug(message, ...meta);
    }

    info(message: string, ...meta: unknown[]): void {
        this.logger.info(message, ...meta);
    }

    warn(message: string, ...meta: unknown[]): void {
        this.logger.warn(message, ...meta);
    }

    error(message: string, stackTrace?: unknown, ...meta: unknown[]): void {
        this.logger.error(message, stackTrace, ...meta);
    }

    fatal(message: string, stackTrace?: unknown, ...meta: unknown[]): void {
        this.logger.error(message, stackTrace, ...meta);
        process.exit(1);
    }
}
