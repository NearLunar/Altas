const nextJest = require("next/jest");

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: "./",
});

/** @type {import('jest').Config} */
const config = {
    coverageProvider: "v8",
    testEnvironment: "jsdom",

    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },

    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
