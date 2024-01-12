import Link from "next/link";
import type { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="w-full bg-gray-100 py-6 md:py-12 lg:py-16 dark:bg-gray-800">
            <div className="container px-4 md:px-6 lg:px-8">
                <div className="grid gap-6 md:grid-cols-3">
                    <div>
                        <h3 className="mb-2 text-lg font-semibold">Social</h3>
                        <nav className="space-y-1">
                            <Link className="text-sm hover:underline" href="#">
                                Twitter
                            </Link>
                            <Link className="text-sm hover:underline" href="#">
                                Facebook
                            </Link>
                            <Link className="text-sm hover:underline" href="#">
                                LinkedIn
                            </Link>
                            <Link className="text-sm hover:underline" href="#">
                                Instagram
                            </Link>
                        </nav>
                    </div>
                    <div>
                        <h3 className="mb-2 text-lg font-semibold">Company</h3>
                        <nav className="space-y-1">
                            <Link className="text-sm hover:underline" href="#">
                                About Us
                            </Link>
                            <Link className="text-sm hover:underline" href="#">
                                Careers
                            </Link>
                            <Link className="text-sm hover:underline" href="#">
                                Press
                            </Link>
                            <Link className="text-sm hover:underline" href="#">
                                Blog
                            </Link>
                        </nav>
                    </div>
                    <div>
                        <h3 className="mb-2 text-lg font-semibold">Info</h3>
                        <nav className="space-y-1">
                            <Link className="text-sm hover:underline" href="#">
                                Terms of Service
                            </Link>
                            <Link className="text-sm hover:underline" href="#">
                                Privacy Policy
                            </Link>
                            <Link className="text-sm hover:underline" href="#">
                                Help & Support
                            </Link>
                            <Link className="text-sm hover:underline" href="#">
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};
