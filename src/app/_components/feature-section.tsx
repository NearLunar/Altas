"use client";

import { GlobeIcon, LinkIcon, MailIcon } from "lucide-react";
import type { ComponentType, FC } from "react";

export const FeatureSection: FC = () => {
    return (
        <section className="w-full bg-secondary py-12 text-secondary-foreground md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 xl:grid-cols-3">
                    <Feature
                        description="Altas provides comprehensive IP risk analysis to
                                help you identify potential threats and
                                vulnerabilities."
                        heading="Analyze IP risks with precision."
                        icon={GlobeIcon}
                        title="IP Risk Analysis"
                    />

                    <Feature
                        description="With Altas, assess the security of your domains
                                and protect them from potential cyber threats."
                        heading="Secure your domains."
                        icon={LinkIcon}
                        title="Domain Risk Analysis"
                    />

                    <Feature
                        description="Altas helps you analyze and mitigate risks associated with your email communications."
                        heading="Protect your emails."
                        icon={MailIcon}
                        title="Email Risk Analysis"
                    />
                </div>
            </div>
        </section>
    );
};

const withIconProps = (
    WrapComp: ComponentType<{
        className?: string;
    }>,
) => {
    const newComponent: FC = () => <WrapComp className="h-12 w-12" />;

    return newComponent;
};

const Feature: FC<{
    title: string;
    heading: string;
    description: string;
    icon: ComponentType<{
        className?: string;
    }>;
}> = (props) => {
    const Icon = withIconProps(props.icon);

    return (
        <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                    {props.title}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    {props.heading}
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {props.description}
                </p>
                <Icon />
            </div>
        </div>
    );
};
