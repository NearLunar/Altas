import * as crypto from "node:crypto";
import * as os from "node:os";

import { argon2id, argon2Verify } from "hash-wasm";

import type { HashingServiceInterface } from "@/application/services/hashing/hashing-service-interface";
import { logger } from "@/utils/logger";

const parallelism = os.cpus().length;

export class Argon2HashingService implements HashingServiceInterface {
    constructor() {
        logger.info("Using Argon2 as hashing algorithm");
    }

    async hashString(input: string, salt?: string): Promise<string> {
        return argon2id({
            password: input,
            salt: salt ?? crypto.randomBytes(128).toString("hex"),
            parallelism,
            iterations: 4,
            memorySize: 1024 * 32,
            hashLength: 128 * 2,
            outputType: "encoded",
        });
    }

    async compareHash(input: string, hash: string): Promise<boolean> {
        return argon2Verify({
            hash,
            password: input,
        }).catch(() => false);
    }

    async isHashSameType(hash: string): Promise<boolean> {
        return Promise.resolve(hash.startsWith("$argon2id"));
    }
}
