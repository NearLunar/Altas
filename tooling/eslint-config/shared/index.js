/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ["turbo", "prettier"],

    plugins: ["turbo", "prettier"],

    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/sort-type-constituents": "warn",
        "no-floating-decimal": "warn",
        "no-console": "warn",
        "turbo/no-undeclared-env-vars": [
            "error",
            {
                allowList: ["NODE_ENV"],
            },
        ],
    },

    overrides: [
        {
            files: ["**/tailwind.config*", "**/.prettierrc*", "**/.eslintrc*"],
            rules: {
                "import/no-default-export": "off",
            },
        },
    ],

    parserOptions: {
        project: "./tsconfig.json",
    },

    ignorePatterns: ["node_modules/", "dist/", "*.config.*"],

    settings: {
        "import/resolver": {
            typescript: {
                project: "./tsconfig.json",
            },
        },
    },
};
