import path from "node:path";

import { migrate } from "drizzle-orm/mysql2/migrator";

import { db } from "@/drizzle/index";
import { logger } from "@/utils/logger";

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
