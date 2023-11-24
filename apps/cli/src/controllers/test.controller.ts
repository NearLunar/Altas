import { ConsoleLogger } from "@altas/adapter-shared";
import { type LoggerPort } from "@altas/core";
import { Container, inject, injectable } from "inversify";
import { TYPES } from "./type";

interface TestControllerInterface {
    execute: (message: string) => Promise<void>;
}

@injectable()
export class TestController implements TestControllerInterface {
    constructor(
        @inject(TYPES.LoggerPort)
        private readonly logger: LoggerPort,
    ) {}

    async execute(message: string): Promise<void> {
        return new Promise((resolve) => {
            this.logger.info(message);
            resolve();
        });
    }
}

const container = new Container();

container
    .bind<LoggerPort>(TYPES.LoggerPort)
    .toDynamicValue(
        () => new ConsoleLogger("com.nearlunar.cli.test-controller"),
    );

container
    .bind<TestControllerInterface>(TYPES.TestController)
    .to(TestController);

export { container };
