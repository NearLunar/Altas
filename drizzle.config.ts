import type { Config } from "drizzle-kit";

export default {
    out: "./migrations",
    schema: "./src/infrastructure/drizzle/schema.ts",
} satisfies Config;
