import { ShieldIcon } from "lucide-react";
import Link from "next/link";
import type { FC } from "react";

export const Navbar: FC = () => {
    return (
        <header className="flex h-14 items-center border-b px-4 lg:px-6">
            <Link className="flex items-center justify-center" href="#">
                <ShieldIcon className="h-6 w-6" />
                <span className="ml-2 text-xl font-extrabold tracking-tight">
                    Altas
                </span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    href="#"
                >
                    Features
                </Link>
                <Link
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    href="#"
                >
                    Pricing
                </Link>
                <Link
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    href="#"
                >
                    About
                </Link>
                <Link
                    className="text-sm font-medium underline-offset-4 hover:underline"
                    href="#"
                >
                    Contact
                </Link>
            </nav>
        </header>
    );
};
