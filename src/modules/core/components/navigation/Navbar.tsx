import { Bars3BottomLeftIcon, BriefcaseIcon, ChevronDownIcon, HomeIcon, LockClosedIcon, UserGroupIcon, UserIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import Button from '../../design-system/Button';

import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Popover, PopoverButton, PopoverPanel, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import useNavbarContext from '../../hooks/useNavbarContext';
import classNames from 'classnames';

import {motion} from "framer-motion"

const links = [
    {
        name: 'Home',
        href: "/",
        icon: <HomeIcon className="h-5" />
    },
    {
        name: 'Agents',
        href: '/agents',
        icon: <UserIcon className="h-5"/>
    },
    {
        name: 'Cases',
        href: "/cases",
        icon: <BriefcaseIcon className="h-5" />
    },
    {
        name: 'Civilians',
        href: "/civilians",
        icon: <UserGroupIcon className="h-5" />
    },
    {
        name: 'Evidences',
        href: "/cases",
        icon: <BriefcaseIcon className="h-5" />
    },
]

const variants = {
    
}

export default function Navbar({}) {

    const {menuOpen, setMenuOpen, profileMenuOpen, setProfileMenuOpen} = useNavbarContext();

  return (
    <>
        <div className="flex justify-between items-center py-5 gap-4">
            <div className="gap-4 md:flex hidden">
                {links.map((item, key) => (
                    <NavLink to={item.href} key={item.name} 
                        className={({isActive}) => isActive ? "text-white bg-white/20 flex items-center justify-center gap-2 font-medium hover:bg-white/20 hover:text-white py-2 px-3 rounded-md" : `flex items-center justify-center gap-2 font-medium hover:bg-white/20 hover:text-white py-2 px-3 rounded-md`}>
                        {item.icon ?? ""}
                        {item.name}
                    </NavLink>
                ))}
            </div>
            <div className="flex md:hidden">
                <Button onClick={() => setMenuOpen(!menuOpen)} >
                    {menuOpen ? <XMarkIcon className="h-6" /> : <Bars3BottomLeftIcon className="h-6" />}
                </Button>
            </div>
            <div>
                <div className="flex gap-4">
                    <div className="w-full max-w-[20rem] mx-auto focus-within:text-black">
                        <div className="relative lg:block hidden">
                            <div className="pl-3 items-center flex left-0 top-0 bottom-0 absolute pointer-events-none">
                                <LockClosedIcon className="w-5" />
                            </div>
                            <input type="search" placeholder="Search" className="pl-10 pr-3 py-[0.375rem] bg-white/20 border-0 rounded-md w-full focus:bg-white outline-none placeholder:text-gray-200" />
                        </div>
                    </div>
                    <Popover className="group">
                        {({open}) => (
                            <>
                                <PopoverButton as={motion.button} whileTap={{scale: 0.90}} className="flex items-center gap-2 h-9 w-9 outline-none overflow-clip">
                                    <img className="w-9 h-9 ring-2 ring-white ring-inset p-0.5 rounded-full" src="https://picsum.photos/150" />
                                </PopoverButton>
                                <Transition
                                    enter="duration-200 ease-out"
                                    enterFrom="scale-95 opacity-0"
                                    enterTo="scale-100 opacity-100"
                                    leave="duration-200 ease-out"
                                    leaveFrom="scale-100 opacity-100"
                                    leaveTo="scale-95 opacity-0"
                                >
                                    <PopoverPanel anchor="bottom end" className="flex flex-col origin-top transition z-50">
                                        <div className=" bg-white rounded-lg shadow-lg p-2 mt-2 backdrop-blur-lg flex flex-col gap-4">
                                            <NavLink to={"/profile"} 
                                                className={({isActive}) => isActive ? "text-white bg-indigo-600 flex items-center justify-center gap-2 font-medium hover:bg-indigo-500 hover:text-white py-2 px-3 rounded-md" : `flex items-center justify-center gap-2 font-medium hover:bg-indigo-600 hover:text-white py-2 px-3 rounded-md`}>
                                                <UserIcon className="h-4" />
                                                Profile
                                            </NavLink>
                                            <NavLink to={"/logout"} 
                                                className={({isActive}) => isActive ? "text-red-500 bg-red-600 flex items-center justify-center gap-2 font-medium hover:bg-red-500 hover:text-white py-2 px-3 rounded-md" : `flex items-center text-red-500 justify-center gap-2 font-medium hover:bg-red-200 hover:text-red-800 py-2 px-3 rounded-md`}>
                                                <UserIcon className="h-4" />
                                                Profile
                                            </NavLink>
                                        </div>
                                    </PopoverPanel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                </div>
            </div>
        </div>
    </>
  );
}
