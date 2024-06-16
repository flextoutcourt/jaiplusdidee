import {Dispatch, SetStateAction, createContext} from "react";
import {Agent} from "../../auth/types/AuthType";

interface ShiftContextType {
    agents : Agent[];
    setAgents : Dispatch < SetStateAction < Agent[] >>
}

const ShiftContext = createContext<ShiftContextType>(undefined as any);

export default ShiftContext;