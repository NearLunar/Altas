#!/usr/bin/env node
import { program } from "commander";

program.command("hello").action(() => {
    // test
});

program.parse(process.argv);
