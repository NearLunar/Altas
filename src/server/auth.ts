import { DrizzleAdapter } from "@auth/drizzle-adapter";
import {
    getServerSession,
    type DefaultSession,
    type NextAuthOptions,
} from "next-auth";
import EmailProvider from "next-auth/providers/email";
import type { Adapter } from "next-auth/adapters";
import { env } from "@/env.mjs";
import { db } from "@/server/db";
import { mysqlTable } from "@/server/db/schema";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: DefaultSession["user"] & {
            id: string;
            // ...other properties
            // role: UserRole;
        };
    }

    // interface User {
    //   // ...other properties
    //   // role: UserRole;
    // }
}

export const authOptions: NextAuthOptions = {
    callbacks: {
        session: ({ session, user }) => ({
            ...session,
            user: {
                ...session.user,
                id: user.id,
            },
        }),
    },
    adapter: DrizzleAdapter(db, mysqlTable) as Adapter,
    providers: [
        EmailProvider({
            server: env.EMAIL_SERVER,
            from: env.EMAIL_FROM,
        }),
    ],
};

export const getServerAuthSession = () => getServerSession(authOptions);
