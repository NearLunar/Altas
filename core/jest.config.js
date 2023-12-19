const jestConfig = require("@altas/jest-config/jest.js")

/** @type {import('jest').Config} */
const config = {
    ...jestConfig,
    verbose: true,
};

module.exports = config;
