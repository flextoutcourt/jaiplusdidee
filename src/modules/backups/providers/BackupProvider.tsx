import { PropsWithChildren, useState } from 'react';
import BackupContext from '../context/BackupContext';
import { BackupType } from '../types/BackupType';

export default function BackupProvider({children} : PropsWithChildren) {

    const [backups,
        setBackups] = useState < BackupType[] > (undefined as any);

    const value = {
        backups,
        setBackups
    }

    return (
        <BackupContext.Provider value={value}>
            {children}
        </BackupContext.Provider>
    );
}
