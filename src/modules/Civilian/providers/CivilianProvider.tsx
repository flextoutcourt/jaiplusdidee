import { PropsWithChildren, useState } from 'react';
import CivilianContext from '../context/CivilianContext';

export default function CivilianProvider({children}: PropsWithChildren) {

    const [civilian, setCivilian] = useState(undefined as any);

    const value = {civilian, setCivilian};

  return (
    <CivilianContext.Provider value={value}>
        {children}
    </CivilianContext.Provider>
  );
}
