import { PropsWithChildren, useState } from 'react';
import SwrContext from '../context/SwrContext';

export default function SwrProvider({children}: PropsWithChildren) {

    const [mutate, setMutate] = useState(undefined as any);

    const value = {mutate, setMutate}

  return (
    <SwrContext.Provider value={value}>
        {children}
    </SwrContext.Provider>
  );
}
