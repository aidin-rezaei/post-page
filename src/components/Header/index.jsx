import Effect from "../Effect";
import LightModeBTN from "../LightModeBTN";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

const Header = () => {
    return (
        <header className="header relative overflow-hidden z-10 flex justify-between items-center shadow-lx ">
            <Effect />
            <Logo />
            <Menu />
            <LightModeBTN />
        </header>
    );
}

export default Header;