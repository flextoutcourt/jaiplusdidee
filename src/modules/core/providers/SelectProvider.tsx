import { PropsWithChildren, useState } from 'react';
import SelectContext from '../context/SelectContext';

export default function SelectProvider({children}: PropsWithChildren) {

    const [selected, setSelected] = useState([]);

    const value = {selected, setSelected};

  return (
    <SelectContext.Provider value={value}>
        {children}
    </SelectContext.Provider>
  );
}
