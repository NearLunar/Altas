import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

const libSQLClient = createClient({
    url: process.env.DATABASE_URL ?? "http://localhost:8080",
    authToken: process.env.DATABASE_AUTH_TOKEN ?? "",
});

export const drizzleClient = drizzle(libSQLClient, {
    logger: true,
});

export * from "./schema/users";
