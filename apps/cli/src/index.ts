#!/usr/bin/env node
import "@abraham/reflection";
import { type LoggerPort } from "@altas/core";
import { Argument, program } from "commander";
import { TYPES } from "~/controllers/type";
import { container } from "~/inversify.config";
import type { TestControllerInterface } from "./controllers/test.controller";

const logger = container.get<LoggerPort>(TYPES.LoggerPort);
const test = container.get<TestControllerInterface>(TYPES.TestController);

program.command("test").action(() => {
    logger.debug("Hello World!");
    logger.info("Hello World!");
    logger.warn("Hello World!");
    logger.error("Hello World!");
    logger.fatal("Hello World!");
});

program
    .command("scanip")
    .addArgument(new Argument("<address>", "IP address to scan"))
    .action(async (address: string) => {
        await test.execute(`Scanning ${address}`);
    });

program.parse(process.argv);
