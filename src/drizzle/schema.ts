import { createId } from "@paralleldrive/cuid2";
import { pgTableCreator, varchar } from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `altas_${name}`);

export const user = pgTable("users", {
    id: varchar("id", {
        length: 255,
    })
        .$defaultFn(() => createId())
        .primaryKey(),

    email: varchar("email", {
        length: 255,
    })
        .unique()
        .notNull(),
});
