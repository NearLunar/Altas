import { eq } from "drizzle-orm";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";

import { UserEntity, UserRole } from "@/domain/entities/user-entity";
import { DatabaseError } from "@/domain/errors/database-error";
import type { UserRepositoryInterface } from "@/domain/repositories/user-repository-interface";
import { drizzleDB } from "@/infrastructure/drizzle";
import { users } from "@/infrastructure/drizzle/schema";

export class DrizzleUserRepository implements UserRepositoryInterface {
    protected dbClient: PostgresJsDatabase;

    constructor(dbClient: PostgresJsDatabase) {
        this.dbClient = dbClient;
    }

    getByEmail = async (email: string): Promise<UserEntity | undefined> => {
        const result = await this.dbClient
            .select()
            .from(users)
            .where(eq(users.email, email))
            .limit(1)
            .catch((error) => {
                if (error instanceof Error) {
                    throw new DatabaseError(error.message);
                }
                throw new DatabaseError("Unknown error");
            });

        const userResult = result[0];

        return userResult
            ? new UserEntity({
                  id: userResult.id,
                  props: {
                      name: userResult.name,
                      email: userResult.email,
                      password: userResult.password,
                      role: UserRole[userResult.role as keyof typeof UserRole],
                  },
              })
            : undefined;
    };

    create = async (entity: UserEntity): Promise<UserEntity> => {
        await this.dbClient
            .insert(users)
            .values({
                name: entity.props.name,
                email: entity.props.email,
                password: entity.props.password,
                role: entity.props.role,
            })
            .catch((error) => {
                if (error instanceof Error) {
                    throw new DatabaseError(error.message);
                }
                throw new DatabaseError("Unknown error");
            });

        return entity;
    };

    update = async (entity: UserEntity): Promise<UserEntity> => {
        await this.dbClient
            .update(users)
            .set({
                name: entity.props.name,
                email: entity.props.email,
                password: entity.props.password,
                role: entity.props.role,
            })
            .where(eq(users.id, entity.id))
            .catch((error) => {
                if (error instanceof Error) {
                    throw new DatabaseError(error.message);
                }
                throw new DatabaseError("Unknown error");
            });

        return entity;
    };

    delete = async (entity: UserEntity): Promise<UserEntity> => {
        await this.dbClient
            .delete(users)
            .where(eq(users.id, entity.id))
            .catch((error) => {
                if (error instanceof Error) {
                    throw new DatabaseError(error.message);
                }
                throw new DatabaseError("Unknown error");
            });

        return entity;
    };

    getById = async (id: string): Promise<UserEntity | undefined> => {
        const result = await this.dbClient
            .select()
            .from(users)
            .where(eq(users.id, id))
            .limit(1)
            .catch((error) => {
                if (error instanceof Error) {
                    throw new DatabaseError(error.message);
                }
                throw new DatabaseError("Unknown error");
            });

        const userResult = result[0];

        return userResult
            ? new UserEntity({
                  id: userResult.id,
                  props: {
                      name: userResult.name,
                      email: userResult.email,
                      password: userResult.password,
                      role: UserRole[userResult.role as keyof typeof UserRole],
                  },
              })
            : undefined;
    };

    getAll = async (): Promise<UserEntity[]> => {
        const result = await drizzleDB
            .select()
            .from(users)
            .catch((error) => {
                if (error instanceof Error) {
                    throw new DatabaseError(error.message);
                }
                throw new DatabaseError("Unknown error");
            });

        return result.map(
            (user) =>
                new UserEntity({
                    id: user.id,
                    props: {
                        name: user.name,
                        email: user.email,
                        password: user.password,
                        role: UserRole[user.role as keyof typeof UserRole],
                    },
                }),
        );
    };
}
