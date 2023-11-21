import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

// This is the main layout of the app
// It wraps your pages with the providers they need
function RootLayout() {
    return (
        <>
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#814BCC",
                    },
                    title: "Altas",
                }}
            />
            <StatusBar />
        </>
    );
}

export default RootLayout;
