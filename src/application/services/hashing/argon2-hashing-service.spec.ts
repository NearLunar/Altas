import { Argon2HashingService } from "@/application/services/hashing/argon2-hashing-service";

describe("argon2-hashing-service", () => {
    let hashingService: Argon2HashingService;

    beforeAll(() => {
        hashingService = new Argon2HashingService();
    });

    describe("hashString", () => {
        test("should hash string", async () => {
            const result = await hashingService.hashString("test");
            expect(result).not.toBe("test");
            expect(result).toContain("$argon2id");
        });

        test("should compare hash correctly", async () => {
            const hash = await hashingService.hashString("test");
            const isValid = await hashingService.compareHash("test", hash);
            expect(isValid).toBe(true);
        });

        test("should not validate false hash", async () => {
            const isValid = await hashingService.compareHash(
                "test",
                "falsehash",
            );
            expect(isValid).toBe(false);
        });

        test("should determine correct hash type", async () => {
            const hash = await hashingService.hashString("test");
            const isValid = await hashingService.isHashSameType(hash);
            expect(isValid).toBe(true);
        });

        test("should determine incorrect hash type", async () => {
            const isValid =
                await hashingService.isHashSameType("invalidTypeHash");
            expect(isValid).toBe(false);
        });
    });
});
