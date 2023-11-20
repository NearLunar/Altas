/** @type {import("eslint").Linter.Config} */
module.exports = {
    root: true,
    extends: [require.resolve("@altas/lint/node")],
    ignorePatterns: [
        "apps/**",
        "packages/**",
        "core/**",
        "infrastructure/**",
        "tooling/**",
    ],
};
