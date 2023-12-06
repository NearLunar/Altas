#!/usr/bin/env node
import "@abraham/reflection";
import { Argument, program } from "commander";
import type { LoggerFactory, LoggerPort } from "@altas/core";
import { DI_LOGGER_FACTORY } from "@altas/core";
import {
    TestControllerInterfaceDI,
    type TestControllerInterface,
} from "~/controllers/test.controller";
import { container } from "~/inversify";

const loggerFactory = container.get<LoggerFactory>(DI_LOGGER_FACTORY);

program.command("test").action(() => {
    const logger: LoggerPort = loggerFactory("test");

    logger.debug("Hello World!");
    logger.info("Hello World!");
    logger.warn("Hello World!");
    logger.error("Hello World!");
});

program
    .command("scanip")
    .addArgument(new Argument("<address>", "IP address to scan"))
    .action(async (address: string) => {
        const test = container.get<TestControllerInterface>(
            TestControllerInterfaceDI,
        );
        await test.execute(`Scanning ${address}`);
    });

program.parse(process.argv);
