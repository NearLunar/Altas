#!/usr/bin/env node
import "@abraham/reflection";
import type { LoggerPort } from "@altas/core";
import { program } from "commander";
import { container } from "./controllers/test.controller";
import { TYPES } from "./controllers/type";

const logger = container.get<LoggerPort>(TYPES.LoggerPort);

program.command("hello").action(() => {
    logger.debug("Hello World!");
    logger.info("Hello World!");
    logger.warn("Hello World!");
    logger.error("Hello World!");
    logger.fatal("Hello World!");
});

program.parse(process.argv);
