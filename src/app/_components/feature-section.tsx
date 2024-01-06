import type { FC } from "react";
import { GlobeIcon, LinkIcon, MailIcon } from "lucide-react";

export const FeatureSection: FC = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary text-secondary-foreground">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
                    <div className="flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg px-3 py-1 text-sm">
                                IP Risk Analysis
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Analyze IP risks with precision.
                            </h2>
                            <p className="max-w-[600px] text-secondary-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Altas provides comprehensive IP risk analysis to
                                help you identify potential threats and
                                vulnerabilities.
                            </p>
                        </div>
                        <GlobeIcon className="h-12 w-12" />
                    </div>
                    <div className="flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Domain Risk Analysis
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Secure your domains.
                            </h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                With Altas, assess the security of your domains
                                and protect them from potential cyber threats.
                            </p>
                        </div>
                        <LinkIcon className="h-12 w-12" />
                    </div>
                    <div className="flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Email Risk Analysis
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Safeguard your emails.
                            </h2>
                            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Altas helps you analyze and mitigate risks
                                associated with your email communications.
                            </p>
                        </div>
                        <MailIcon className="h-12 w-12" />
                    </div>
                </div>
            </div>
        </section>
    );
};
