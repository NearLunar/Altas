import { fastify } from "fastify";
import { fastifyTRPCPlugin, appRouter } from "@altas/adapter-trpc/server";
import ws from "@fastify/websocket";

const server = fastify({
    maxParamLength: 5000,
});

void server.register(ws);

void server.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    useWSS: true,
    trpcOptions: { router: appRouter },
});

const main = async () => {
    server.log.info("Starting server...");
    await server.listen({ port: 2999 }).then(() => {
        server.log.info(
            `Server listening at ${server.server.address()?.toString()}`,
        );
    });
};

main().catch((err) => {
    server.log.error(err);
    process.exit(1);
});
