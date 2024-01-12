/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");

const isProduction = process.env.NODE_ENV === "production"

/** @type {import("next").NextConfig} */
const config = {
    swcMinify: true
};

export default config;
