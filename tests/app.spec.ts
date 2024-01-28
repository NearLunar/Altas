import request from "supertest";
import type TestAgent from "supertest/lib/agent";

import { app } from "@/app";

describe("app", () => {
    let server: TestAgent;

    beforeAll(() => {
        server = request.agent(app);
    });

    // Test / route
    it("should return 200 and return 'Hello World!'", () => {
        return server.get("/").expect(200).expect("Hello World!");
    });
});
