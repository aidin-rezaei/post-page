import LightModeBTN from "../LightModeBTN";
import Logo from "./components/Logo";
import Menu from "./components/Menu";

const Header = () => {
    return (
        <header className=" flex justify-between items-center border-b border-[#E1E6EC]">
            <Logo/>
            <Menu/>
            <LightModeBTN />
        </header>
    );
}

export default Header;