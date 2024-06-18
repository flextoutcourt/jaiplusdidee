import { SetStateAction } from "jotai";
import { Dispatch, createContext } from "react";

interface SWRContextType {
    mutate: any;
    setMutate: Dispatch<SetStateAction<any>>
}

const SwrContext = createContext<SWRContextType>(undefined as any);

export default SwrContext;