import { Dispatch, createContext } from "react";
import { User } from "../../auth/types/AuthType";
import { SetStateAction } from "jotai";

interface CivilianContextType {
    civilian: User;
    setCivilian: Dispatch<SetStateAction<User>>
}

const CivilianContext = createContext<CivilianContextType>(undefined as any);

export default CivilianContext;