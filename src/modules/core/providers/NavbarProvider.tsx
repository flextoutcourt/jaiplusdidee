import React, { PropsWithChildren, useState } from 'react';
import NavbarContext from '../context/NavbarContext';

export default function NavbarProvider({children}: PropsWithChildren) {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [profileMenuOpen, setProfileMenuOpen] = useState<boolean>(true);
    const [title, setTitle] = useState<string>('Dashboard')

    const value = {
        menuOpen, setMenuOpen,
        profileMenuOpen, setProfileMenuOpen,
        title, setTitle
    }

  return (
    <NavbarContext.Provider value={value}>
        {children}
    </NavbarContext.Provider>
  );
}
