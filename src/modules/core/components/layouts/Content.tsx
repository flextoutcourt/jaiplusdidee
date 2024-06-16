import { PropsWithChildren } from 'react';
import useAuth from '../../../auth/hooks/useAuth';
import Backup from '../../../backups/components/Backup';
import ChannelProvider from '../../../pusher/providers/ChannelProvider';
import ShiftList from '../../../shift/components/ShiftList';
import ShiftProvider from '../../../shift/providers/ShiftProvider';

export default function Content({children}: PropsWithChildren) {

    const {user} = useAuth();
    
  return (
    <>
        <main className="-mt-24 pb-8 relative">
            <div className="px-16">
                <div className="grid grid-cols-9 gap-4">
                    <div className={!user ? "col-span-9" : "col-span-7"}>
                        <div className="bg-white h-screen rounded-md p-4 max-h-[calc(100vh-19.75rem)] overflow-auto shadow-lg">
                            {children}
                        </div>
                    </div>
                    {user && 
                        <div className="col-span-2">
                            <div className="bg-white h-screen rounded-md max-h-[calc(100vh-19.75rem)] overflow-auto p-4">
                                <ShiftProvider>
                                    <ChannelProvider>
                                        <ShiftList />
                                    </ChannelProvider>
                                </ShiftProvider>
                                <Backup />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </main>
    </>
  );
}
