import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { Footer } from "@/app/_components/footer";
import { Navbar } from "@/components/navbar";
import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Altas",
    description: "",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className="dark" lang="en">
            <body
                className={`min-h-screen bg-background font-sans antialiased ${inter.variable}`}
            >
                <TRPCReactProvider cookies={cookies().toString()}>
                    <Navbar />
                    {children}
                    <Footer />
                </TRPCReactProvider>
            </body>
        </html>
    );
}
