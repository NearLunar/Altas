import { drizzle } from "drizzle-orm/mysql2";
import { createConnection } from "mysql2";

import { env } from "@/env";

export const connection = createConnection(env.DATABASE_URL);

export const db = drizzle(connection);
