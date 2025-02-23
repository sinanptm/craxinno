import { CircleHelp } from "lucide-react";
import Logo from "./Logo";
import { memo } from "react";

const NavBar = () => {
    return (
        <nav className="border-b pb-2">
            <main className="px-5 py-4 mx-auto flex justify-between items-center">
                <Logo />
                <CircleHelp />
            </main>
        </nav>
    );
};

export default memo(NavBar);