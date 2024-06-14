import { SetStateAction, createContext, Dispatch } from "react";

interface NavbarContextType {
    menuOpen: boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
    profileMenuOpen: boolean;
    setProfileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const NavbarContext = createContext<NavbarContextType>(undefined as any);

export default NavbarContext;