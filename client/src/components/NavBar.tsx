import { CircleHelp } from "lucide-react";
import Logo from "./Logo";
import { memo } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="border-b pb-2">
            <main className="px-5 py-4 mx-auto flex justify-between items-center">
                <Link to={'/'}>
                    <Logo />
                </Link>
                <CircleHelp className="cursor-pointer" />
            </main>
        </nav>
    );
};

export default memo(NavBar);