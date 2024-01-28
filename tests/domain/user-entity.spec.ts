import { UserEntity } from "@/domain/user-entity";

describe("user entity", () => {
    it("shouldn't fail on initialization", () => {
        expect(
            () =>
                new UserEntity({
                    props: {
                        name: "Test User",
                        email: "test@test.com",
                        password: "asdfkja;sldkfyiaey",
                        role: "admin",
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
                        role: "admin",
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
                        role: "admin",
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
                        role: "admin",
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
                        role: "admin",
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
                        role: "admin",
                    },
                }),
        ).toThrow("Invalid Password");
    });
});
