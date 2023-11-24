import { type LoggerPort } from "@altas/core";
import { inject, injectable } from "inversify";
import { TYPES } from "./type";

export interface TestControllerInterface {
    execute: (message: string) => Promise<void>;
}

@injectable()
export class TestController implements TestControllerInterface {
    constructor(
        @inject(TYPES.LoggerPort)
        protected readonly logger: LoggerPort,
    ) {}

    async execute(message: string): Promise<void> {
        return new Promise((resolve) => {
            this.logger.info(message);
            resolve();
        });
    }
}
