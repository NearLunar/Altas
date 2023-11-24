#!/usr/bin/env node
import "@abraham/reflection";
import { program } from "commander";
import type { TestController } from "./controllers/test.controller";
import { container } from "./controllers/test.controller";
import { TYPES } from "./controllers/type";

program.command("hello").action(async () => {
    await container.get<TestController>(TYPES.TestController).execute();
});

program.parse(process.argv);
