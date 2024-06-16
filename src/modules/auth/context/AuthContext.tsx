import { Dispatch, SetStateAction, createContext } from "react";
import { Agent } from "../types/AuthType";

type AuthContextType = {
    user: Agent;
    setUser: Dispatch<SetStateAction<Agent>>;
}

const AuthContext = createContext<AuthContextType>(undefined as any);

export default AuthContext;