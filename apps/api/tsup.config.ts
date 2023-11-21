import { defineConfig } from "tsup";

const tsupConfig = defineConfig((options) => {
    return {
        entry: ["src/index.ts"],
        onSuccess: "node dist/index.js",
        clean: true,
        minify: !options.watch,
        noExternal: [/^@altas\/.*/],
    };
});

export default tsupConfig;
