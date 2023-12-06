import { ConsoleLogger } from "@altas/adapter-shared";
import { DI_LOGGER_FACTORY } from "@altas/core";
import type { LoggerFactory, LoggerPort } from "@altas/core";
import type { interfaces } from "inversify";
import { Container } from "inversify";
import type { TestControllerInterface } from "./controllers/test.controller";
import {
    TestController,
    TestControllerInterfaceDI,
} from "./controllers/test.controller";

const container: interfaces.Container = new Container();

// Logger Factory for ConsoleLogger
container
    .bind<LoggerFactory>(DI_LOGGER_FACTORY)
    .toFactory<LoggerPort, [string]>(() => {
        return (namespace: string) => {
            return new ConsoleLogger(namespace);
        };
    });

container
    .bind<TestControllerInterface>(TestControllerInterfaceDI)
    .to(TestController);

export { container };
