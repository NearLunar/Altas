import {
    createTRPCProxyClient,
    createWSClient,
    httpBatchLink,
    splitLink,
    wsLink,
} from "@trpc/client";
import { WebSocket as wsWebSocket } from "ws";
import type { AppRouter } from "../server";

export const trpcProxyClient = createTRPCProxyClient<AppRouter>({
    links: [
        splitLink({
            condition: (op) => op.type === "subscription",

            true: wsLink<AppRouter>({
                client: createWSClient({
                    url: "ws://localhost:2999/trpc",
                    WebSocket: wsWebSocket as unknown as typeof WebSocket,
                }),
            }),

            false: httpBatchLink({
                url: "http://localhost:2999/trpc",
            }),
        }),
    ],
});

export { TRPCClientError } from "@trpc/client";
