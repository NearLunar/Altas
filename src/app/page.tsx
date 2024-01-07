import { FeatureSection } from "@/app/_components/feature-section";
import { HeroSection } from "@/app/_components/hero-section";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
    return (
        <main className="flex-1">
            <HeroSection />
            <FeatureSection />
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Testimonials
                        </h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Hear from our satisfied customers.
                        </p>
                    </div>
                    <div className="grid w-full grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8 lg:gap-12 [&>img]:mx-auto">
                        <Card>
                            <CardContent>
                                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                                    “Altas has been a game changer for our
                                    company. The risk analysis is top-notch and
                                    has helped us secure our digital assets.“
                                </blockquote>
                                <div>
                                    <div className="font-semibold">
                                        John Doe
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        CEO, XYZ Corp
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                                    “We&apos;ve been using Altas for a year now
                                    and it&apos;s been a great experience. The
                                    insights provided by the tool are
                                    invaluable.“
                                </blockquote>
                                <div>
                                    <div className="font-semibold">
                                        Jane Smith
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        CTO, ABC Inc
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent>
                                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                                    “Altas is a must-have tool for any company
                                    that values their digital security. Highly
                                    recommended!“
                                </blockquote>
                                <div>
                                    <div className="font-semibold">
                                        Robert Johnson
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        Security Officer, DEF Ltd
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
}
