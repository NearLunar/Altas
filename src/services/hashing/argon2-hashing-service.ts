import * as crypto from "node:crypto";
import * as os from "node:os";

import { argon2id, argon2Verify } from "hash-wasm";

import type { HashingServiceInterface } from "@/services/hashing/hashing-service-interface";

export class Argon2HashingService implements HashingServiceInterface {
    async hashString(input: string, salt?: string): Promise<string> {
        return argon2id({
            password: input,
            salt: salt ?? crypto.randomBytes(16).toString("hex"),
            parallelism: os.cpus().length,
            iterations: 8,
            memorySize: 1024 * 64,
            hashLength: 16 * 8,
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
