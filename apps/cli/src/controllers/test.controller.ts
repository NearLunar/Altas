import * as core from "@altas/core";
import { inject, injectable } from "inversify";

export interface TestControllerInterface {
    execute: (message: string) => Promise<void>;
}

export const TestControllerInterfaceDI = Symbol("TestControllerInterface");

@injectable()
export class TestController implements TestControllerInterface {
    protected readonly logger;

    constructor(
        @inject(core.DI_LOGGER_FACTORY)
        loggerFactory: core.LoggerFactory,
    ) {
        this.logger = loggerFactory("controller.test");
    }

    async execute(message: string): Promise<void> {
        return new Promise((resolve) => {
            this.logger.info(message);
            resolve();
        });
    }
}
