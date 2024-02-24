import { UserEntity, UserRole } from "@/domain/entities/user-entity";

describe("schema entity", () => {
    it("shouldn't fail on initialization", () => {
        expect(
            () =>
                new UserEntity({
                    props: {
                        name: "Test User",
                        email: "test@test.com",
                        password: "asdfkja;sldkfyiaey",
                        role: UserRole.ADMIN,
                    },
                }),
        ).not.toThrow();
    });

    it("should fail validation for name on initialisation", () => {
        expect(
            () =>
                new UserEntity({
                    props: {
                        name: "",
                        email: "test@test.com",
                        password: "asdfkja;sldkfyiaey",
                        role: UserRole.ADMIN,
                    },
                }),
        ).toThrow("Invalid Name");
    });

    it("should fail validation for email on initialisation", () => {
        expect(
            () =>
                new UserEntity({
                    props: {
                        name: "Test User",
                        email: "",
                        password: "asdfkja;sldkfyiaey",
                        role: UserRole.ADMIN,
                    },
                }),
        ).toThrow("Invalid Email");

        expect(
            () =>
                new UserEntity({
                    props: {
                        name: "Test User",
                        email: "asdfa@asdfas.",
                        password: "asdfkja;sldkfyiaey",
                        role: UserRole.ADMIN,
                    },
                }),
        ).toThrow("Invalid Email");
    });

    it("should fail validation for password on initialisation", () => {
        expect(
            () =>
                new UserEntity({
                    props: {
                        name: "Test User",
                        email: "test@test.com",
                        password: "",
                        role: UserRole.ADMIN,
                    },
                }),
        ).toThrow("Invalid Password");

        expect(
            () =>
                new UserEntity({
                    props: {
                        name: "Test User",
                        email: "test@test.com",
                        password: "a".repeat(256),
                        role: UserRole.ADMIN,
                    },
                }),
        ).toThrow("Invalid Password");
    });
});
