import type { Config } from "drizzle-kit";
import * as process from "process";

export default {
    schema: "./src/schema/*",
    out: "./src/migrations",
    driver: process.env["DATABASE_AUTH_TOKEN"] ? "turso" : "libsql",
    dbCredentials: {
        url: process.env["DATABASE_URL"] ?? "http://127.0.0.1:8080",
        authToken: process.env["DATABASE_AUTH_TOKEN"] ?? "",
    },
} satisfies Config;
