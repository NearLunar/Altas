const merge = require("lodash/merge");
const shared = require("./shared");

/** @type {import("eslint").Linter.Config} */
const config = {
    extends: [
        ...[
            "@vercel/style-guide/eslint/node",
            "@vercel/style-guide/eslint/typescript",
        ].map(require.resolve),
    ],
    globals: {
        React: true,
        JSX: true,
    },

    root: true,
};

module.exports = merge({}, shared, config);
