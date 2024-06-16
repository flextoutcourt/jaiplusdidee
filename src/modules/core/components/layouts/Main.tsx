import { Transition } from '@headlessui/react';
import { PropsWithChildren } from 'react';
import AuthProvider from '../../../auth/providers/AuthProvider';
import useNavbarContext from '../../hooks/useNavbarContext';
import Navbar from '../navigation/Navbar';
import Sidebar from '../navigation/Sidebar';
import Content from './Content';

interface MainLayoutType extends PropsWithChildren {
    title?: string;
    noBackups?: boolean
}

export default function MainLayout({children, title}: MainLayoutType) {

    const {menuOpen} = useNavbarContext();

  return (
    <div className="flex w-screen overflow-hidden">
        <AuthProvider>
            <Transition 
                show={menuOpen} 
                enter={"duration-300"}
                enterFrom={"w-0 opacity-0"}
                enterTo={"w-[calc(50vw)] opacity-100"}
                leave={"duration-300"}
                leaveFrom={"w-[calc(50vw)] opacity-100"}
                leaveTo={"w-0 opacity-0"}
            >
                <div className="bg-gray-100 shadow-lg flex-shrink-0 z-50 rounded-tr-3xl overflow-hidden">
                    <Sidebar />
                </div>
            </Transition>
            <div className={"w-full flex-shrink-0 z-10"}>
                <header className={"w-[calc(100vw+2rem)] bg-indigo-600 px-20 text-white pb-24 sticky -mx-4 shadow-lg"}>
                    <Navbar />
                    <div className="h-[1px] w-full bg-white/25 rounded-lg"></div>
                    <div className="py-10">
                        <h1 className="text-3xl text-white font-bold">
                            {title ?? 'Dashboard'}
                        </h1>
                    </div>
                </header>
                <Content>
                    {children}
                </Content>
                <footer>
                    <div className="px-16">
                        <div className="text-sm py-8 text-gray-600 border-t border-gray-300">
                            &copy; {new Date().getFullYear()} Flex MDT. All rights reserved.
                        </div>
                    </div>
                </footer>
            </div>
        </AuthProvider>
    </div>
  );
}
