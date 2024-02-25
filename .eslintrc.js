const { resolve } = require("node:path");

const project = resolve(__dirname, "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    plugins: ["unused-imports", "simple-import-sort", "prettier"],
    extends: [
        ...[
            "@vercel/style-guide/eslint/node",
            "@vercel/style-guide/eslint/typescript",
            "@vercel/style-guide/eslint/jest",
        ].map((x) => require.resolve(x)),
        "prettier",
    ],
    rules: {
        "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
        // Need to Disable 'import/order' for simple-import-sort
        "import/order": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "prettier/prettier": "error",
        "jest/expect-expect": [
            "error",
            {
                assertFunctionNames: ["expect", "**.expect"],
                additionalTestBlockFunctions: [],
            },
        ],
    },

    parserOptions: {
        project,
    },

    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },

    overrides: [
        {
            files: ["**/*.config.*"],
            rules: {
                "import/no-default-export": "off",
            },
        },
    ],
};
