import { ConsoleLogger } from "@altas/adapter-shared";
import { LoggerPort } from "@altas/core";
import { Container } from "inversify";
import { TestController, TestControllerInterface } from "./controllers/test.controller";
import { TYPES } from "./controllers/type";

const container = new Container();

// container
//     .bind<LoggerPort>(TYPES.LoggerPort)
//     .toDynamicValue(() => new ConsoleLogger("cli.test-controller"));

container
    .bind<TestControllerInterface>(TYPES.TestController)
    .to(TestController);

export { container };
