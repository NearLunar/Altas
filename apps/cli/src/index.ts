#!/usr/bin/env node
import { program } from "commander";

program.command("hello").action(() => {
    //console.log("Hello World");
});

program.parse(process.argv);
