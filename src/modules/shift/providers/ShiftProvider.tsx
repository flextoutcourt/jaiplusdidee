import { PropsWithChildren, useState } from 'react';
import { Agent } from '../../auth/types/AuthType';
import ShiftContext from '../context/ShiftContext';

export default function ShiftProvider({children} : PropsWithChildren) {

    const [agents,setAgents] = useState<Agent[]>(undefined as any);

    const value = {
        agents,
        setAgents
    };

    return (
        <ShiftContext.Provider value={value}>
            {children}
        </ShiftContext.Provider>
    );
}
