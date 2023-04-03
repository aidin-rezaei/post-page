import Effect from "../Effect";
import LightModeBTN from "../LightModeBTN";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

const Header = () => {
    return (
        <header className="header relative z-10 flex justify-between items-center shadow-lx ">
            <div className="absolute w-[100%] h-[100%] top-0 left-0 -z-10 overflow-hidden">
                <Effect />
            </div>
            <Logo />
            <Menu />
            <LightModeBTN />
        </header>
    );
}

export default Header;