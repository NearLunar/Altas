import type { ExpoConfig } from "@expo/config";

const defineConfig = (): ExpoConfig => ({
    name: "Altas",
    slug: "altas",
    scheme: "altas",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "dark",
    splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
        supportsTablet: true,
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./assets/adaptive-icon.png",
            backgroundColor: "#ffffff",
        },
    },

    experiments: {
        tsconfigPaths: true,
        typedRoutes: true,
    },
    plugins: ["expo-router"],
});

export default defineConfig;
