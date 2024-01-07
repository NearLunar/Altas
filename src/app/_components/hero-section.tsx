import Link from "next/link";
import type { FC } from "react";

import { Button } from "@/components/ui/button";

export const HeroSection: FC = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                            Your Risk Engine for IPs, Domains and Emails
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                            Altas provides comprehensive risk assessment for
                            your digital assets. Stay ahead of threats with
                            real-time risk analysis.
                        </p>
                    </div>
                    <div className="space-x-4">
                        <Button asChild>
                            <Link href="#">Get Started</Link>
                        </Button>
                        <Button asChild variant="secondary">
                            <Link href="#">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
