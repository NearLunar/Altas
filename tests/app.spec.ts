import request from "supertest";
import type TestAgent from "supertest/lib/agent";

import { app } from "@/app";

describe("app", () => {
    let server: TestAgent;

    beforeAll(() => {
        server = request.agent(app);
    });

    it("should be true", () => {
        expect(true).toBe(true);
    });

    it("should be false", () => {
        expect(false).toBe(false);
    });

    // Test / route
    it("should return 200", () => {
        return server.get("/").expect(200);
    });
});
