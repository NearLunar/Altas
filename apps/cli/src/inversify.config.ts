import { ConsoleLogger } from "@altas/adapter-shared";
import { LoggerPort } from "@altas/core";
import { Container, injectable } from "inversify";
import {
    TestController,
    TestControllerInterface,
} from "./controllers/test.controller";
import { TYPES } from "./controllers/type";

const container = new Container();

@injectable()
class LoggerFactory {
    public createLogger(context: string): LoggerPort {
        return new ConsoleLogger(`cli.${context}`);        
    }
}



container.bind<LoggerFactory>(LoggerFactory).toSelf();

container.bind<LoggerPort>(TYPES.LoggerPort).toDynamicValue(() => {

 
    return new ConsoleLogger("default");
});

container
    .bind<TestControllerInterface>(TYPES.TestController)
    .toDynamicValue(() => {
        const logger = container
            .get<LoggerFactory>(LoggerFactory)
            .createLogger("test-controller");
        return new TestController(logger);
    });


export { container };
