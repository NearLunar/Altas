const merge = require("lodash/merge");
const shared = require("./shared");

/** @type {import("eslint").Linter.Config} */
const config = {
    extends: [
        ...[
            "@vercel/style-guide/eslint/browser",
            "@vercel/style-guide/eslint/node",
            "@vercel/style-guide/eslint/typescript",
            "@vercel/style-guide/eslint/react",
        ].map((config) => require.resolve(config)),
    ],
    globals: {
        JSX: true,
    },
};

module.exports = merge({}, shared, config);
