import type { FC } from "react";

export const Navbar: FC = () => {
    return (
        <nav className="flex border-b px-6 h-16 items-center">
            <span className="font-extrabold tracking-tight text-xl">Altas</span>
            <div className="ml-auto flex items-center">Test</div>
        </nav>
    );
};
