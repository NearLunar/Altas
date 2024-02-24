import { BaseEntity } from "@/abstracts/base-entity";

class TestEntity extends BaseEntity<unknown> {
    validate(): void {
        // Do nothing
    }
}

const MaxDate = new Date(8640000000000000);
const MinDate = new Date(-8640000000000000);

describe("base entity", () => {
    it("should fail validation for id on initialisation", () => {
        expect(
            () =>
                new TestEntity({
                    id: "invalid-id",
                    props: {},
                }),
        ).toThrow("Invalid ID");
    });

    it("should fail validation for createdAt on initialisation", () => {
        expect(
            () =>
                new TestEntity({
                    createdAt: MaxDate,
                    props: {},
                }),
        ).toThrow("Invalid Date");

        expect(
            () =>
                new TestEntity({
                    createdAt: MinDate,
                    props: {},
                }),
        ).not.toThrow();
    });

    it("should fail validation for updatedAt on initialisation", () => {
        expect(
            () =>
                new TestEntity({
                    updatedAt: MaxDate,
                    props: {},
                }),
        ).toThrow("Invalid Date");

        expect(
            () =>
                new TestEntity({
                    updatedAt: MinDate,
                    props: {},
                }),
        ).not.toThrow();
    });

    it("should fail validation for props on initialisation", () => {
        expect(
            () =>
                new TestEntity({
                    props: {
                        invalid1: "props",
                        invalid2: "props",
                        invalid3: "props",
                        invalid4: "props",
                        invalid5: "props",
                        invalid6: "props",
                        invalid7: "props",
                        invalid8: "props",
                        invalid9: "props",
                        invalid10: "props",
                        invalid11: "props",
                        invalid12: "props",
                        invalid13: "props",
                        invalid14: "props",
                    },
                }),
        ).toThrow("Invalid Props");

        expect(
            () =>
                new TestEntity({
                    props: {},
                }),
        ).not.toThrow();
    });

    it("shouldn't fail on default initialization", () => {
        expect(
            () =>
                new TestEntity({
                    props: {},
                }),
        ).not.toThrow();
    });
});
