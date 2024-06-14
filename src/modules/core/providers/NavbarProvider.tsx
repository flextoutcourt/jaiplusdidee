import React, { PropsWithChildren, useState } from 'react';
import NavbarContext from '../context/NavbarContext';

export default function NavbarProvider({children}: PropsWithChildren) {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState<boolean>(true);

    const value = {
        menuOpen, setMenuOpen,
        profileMenuOpen, setProfileMenuOpen
    }

  return (
    <NavbarContext.Provider value={value}>
        {children}
    </NavbarContext.Provider>
  );
}
