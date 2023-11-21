const merge = require("lodash/merge");
const shared = require("./shared/index.js");

/** @type {import("eslint").Linter.Config} */
const config = {
    extends: [
        ...[
            "@vercel/style-guide/eslint/node",
            "@vercel/style-guide/eslint/browser",
            "@vercel/style-guide/eslint/typescript",
            "@vercel/style-guide/eslint/react",
        ].map(require.resolve),
    ],
    globals: {
        React: true,
        JSX: true,
    },
    ignorePatterns: ["**/.expo/**"],
    rules: {
        "import/no-default-export": "off",
    },
    root: true,
};

module.exports = merge({}, shared, config);
