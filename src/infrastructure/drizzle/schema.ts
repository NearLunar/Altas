import { createId } from "@paralleldrive/cuid2";
import {
    date,
    pgEnum,
    pgTableCreator,
    text,
    varchar,
} from "drizzle-orm/pg-core";

const pgTable = pgTableCreator((name) => `altas_${name}`);

export const userRoleEnum = pgEnum("user_role", ["admin", "user"]);

export const users = pgTable("users", {
    id: varchar("id", {
        length: 255,
    })
        .$defaultFn(() => createId())
        .primaryKey(),

    name: text("name").notNull(),

    email: text("email").unique().notNull(),

    password: text("password").notNull(),

    role: userRoleEnum("role").notNull(),

    createdAt: date("created_at").notNull().defaultNow(),
    updatedAt: date("updated_at").notNull().defaultNow(),
});
