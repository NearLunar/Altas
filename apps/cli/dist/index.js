#!/usr/bin/env node
"use strict";
var o = require("commander");
o.program.command("hello").action(() => {});
o.program.parse(process.argv);
