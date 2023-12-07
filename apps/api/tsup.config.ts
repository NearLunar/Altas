
import { defineConfig } from "tsup";
import packageJson from "./package.json";
import path from "path";
import { realpathSync } from "fs";

const isWatch = process.env.WATCH === "true";
const isDev = process.env.NODE_ENV !== "production";

const tsupConfig = defineConfig((options) => {

    return {
        entry: ["src/index.ts"],
        onSuccess: "node dist/index.js",
        watch: isWatch ? [
            ".",
            ...Object.keys(packageJson.dependencies).concat(Object.keys(packageJson.devDependencies)).filter((dep) => dep.startsWith("@altas")).map(
                (dep) => realpathSync(path.resolve("node_modules", dep)),
            ),
        ] : undefined,
        clean: true,
        minify: !isDev,
        noExternal: [/^@altas\/.*/],
    };
});

export default tsupConfig;
