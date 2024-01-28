/** @type {import('jest').Config} */
const config = {
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
module.exports = config;
