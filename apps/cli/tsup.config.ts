import { defineConfig } from "tsup";

const tsupConfig = defineConfig((options) => {
    return {
        entry: ["src/index.ts"],
        clean: true,
        minify: !options.watch,
        noExternal: [/^@altas\/.*/],
    };
});

export default tsupConfig;
