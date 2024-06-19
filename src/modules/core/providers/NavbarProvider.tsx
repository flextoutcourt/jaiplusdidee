import React, { PropsWithChildren, useState } from 'react';
import NavbarContext from '../context/NavbarContext';

export default function NavbarProvider({children}: PropsWithChildren) {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState<boolean>(true);
    const [title, setTitle] = useState<string>('Dashboard')
    const [wanted, setWanted] = useState<boolean>(false)

    const value = {
        menuOpen, setMenuOpen,
        profileMenuOpen, setProfileMenuOpen,
        title, setTitle,
        wanted, setWanted
    }

  return (
    <NavbarContext.Provider value={value}>
        {children}
    </NavbarContext.Provider>
  );
}
