/** @type {import('jest').Config} */
const config = {
    verbose: true,
    testEnvironment: "node",
    transform: {
        "^.+\\.tsx?$": ["@swc/jest"],
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

module.exports = config;
