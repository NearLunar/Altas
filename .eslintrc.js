const { resolve } = require("node:path");

const project = resolve(__dirname, "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    plugins: ["prettier"],
    extends: [
        ...[
            "@vercel/style-guide/eslint/node",
            "@vercel/style-guide/eslint/typescript",
            "@vercel/style-guide/eslint/browser",
            "@vercel/style-guide/eslint/react",
            "@vercel/style-guide/eslint/next",
        ].map((x) => require.resolve(x)),
        "prettier",
    ],
    rules: {
        "prettier/prettier": "error",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/sort-type-constituents": "warn",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-call": "off",
    },

    globals: {
        React: true,
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
            files: ["**/{layout,page}.tsx"],
            rules: {
                "import/no-default-export": "off",
            },
        },
    ],
};
