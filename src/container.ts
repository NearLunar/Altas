import { Argon2HashingService } from "@/application/hashing/argon2-hashing-service";
import type { HashingServiceInterface } from "@/application/hashing/hashing-service-interface";
import type { UserRepositoryInterface } from "@/domain/repositories/user-repository-interface";
import { drizzleDB } from "@/infrastructure/drizzle";
import { DrizzleUserRepository } from "@/infrastructure/repositories/drizzle-user-repository";

export const hashingService: HashingServiceInterface =
    new Argon2HashingService();

export const userRepository: UserRepositoryInterface =
    new DrizzleUserRepository(drizzleDB);
