import { ConsoleLogger } from "@altas/adapter-shared";
import { DI_LOGGER_FACTORY } from "@altas/core";
import type { LoggerFactory, LoggerPort } from "@altas/core";
import { Container } from "inversify";

const container = new Container();

// Logger Factory for ConsoleLogger
container
    .bind<LoggerFactory>(DI_LOGGER_FACTORY)
    .toFactory<LoggerPort, [string]>(() => {
        return (namespace: string) => {
            return new ConsoleLogger(namespace);
        };
    });

export { container };
