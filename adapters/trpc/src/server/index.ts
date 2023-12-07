import { observable } from "@trpc/server/observable";
import { z } from "zod";
import { proceedure as procedure, router } from "./trpc";

export const appRouter = router({
    hello: procedure.query(() => {
        return {
            message: "Hello, world!",
        };
    }),
    randomNumber: procedure.subscription(() => {
        return observable((a) => {
            setInterval(() => {
                a.next(`Random number: ${Math.round(Math.random() * 1000000)}`);
            }, 100);
        });
    }),
    echo: procedure.input(z.string().ip()).query((a) => {
        return {
            message: `Echo: ${a.input}`,
        };
    }),
});

export type AppRouter = typeof appRouter;

export { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
