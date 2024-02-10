import path from "node:path";

import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import { env } from "@/env";
import { logger } from "@/utils/logger";

const connection = postgres(env.DATABASE_URL, { max: 1 });
const db = drizzle(connection);

const migrationPath = path.join(__dirname, "../../migrations");

const main = async () => {
    logger.info("Migrating...", migrationPath);

    await migrate(db, {
        migrationsFolder: migrationPath,
    });

    logger.info("Done Migrating...");

    process.exit(0);
};

void main();
