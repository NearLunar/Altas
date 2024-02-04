import { createId } from "@paralleldrive/cuid2";
import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const schema = mysqlTable("users", {
    id: varchar("id", {
        length: 255,
    })
        .$defaultFn(() => createId())
        .primaryKey(),
});
