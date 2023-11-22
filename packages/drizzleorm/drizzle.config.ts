import type { Config } from "drizzle-kit";

export default {
    schema: "./src/schema/*",
    out: "./src/migrations",
    driver: "libsql",
    dbCredentials: {
        url: process.env["DATABASE_URL"] ?? "http://localhost:8080",
    },
} satisfies Config;
