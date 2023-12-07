#!/usr/bin/env node
import "@abraham/reflection";
import { log } from "node:console";
import { TRPCClientError, trpcProxyClient } from "@altas/adapter-trpc/client";
import { Argument, program } from "commander";

program.command("test").action(async () => {
    log(await trpcProxyClient.hello.query());
    trpcProxyClient.randomNumber.subscribe(undefined, {
        onData: (data) => {
            log(data);
        },
    });
});

program
    .command("scanip")
    .addArgument(new Argument("<address>", "IP address to scan"))
    .action(async (address: string) => {
        log(
            await trpcProxyClient.echo.query(address).catch((err) => {
                if (err instanceof TRPCClientError) {
                    return err.message;
                }
                return "Unknown error";
            }),
        );
        log("Done!");
        process.exit(0);
    });

program.parse(process.argv);
