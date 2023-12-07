// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
    dependencyTypes: ["dev", "peer", "prod"],
    semverRange: "^",
    versionGroups: [
        {
            label: "All Internal Packages are workspace:*",
            dependencies: ["@altas/*"],
            packages: ["**"],
            pinVersion: "workspace:*",
        },
    ],
};

module.exports = config;
