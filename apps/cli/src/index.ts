#!/usr/bin/env node
import "@abraham/reflection";
import { program } from "commander";
import type { TestController } from "./controllers/test.controller";
import { container } from "./controllers/test.controller";
import { TYPES } from "./controllers/type";

program.command("hello").action(async () => {
    const testController = container.get<TestController>(TYPES.TestController);

    await testController.execute("Hello World!");
    await testController.execute("Hello World!");
});

program.parse(process.argv);
