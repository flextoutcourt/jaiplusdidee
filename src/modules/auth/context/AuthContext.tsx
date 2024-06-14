import { Dispatch, SetStateAction, createContext } from "react";

type AuthContextType = {
    user: any;
    setUser: Dispatch<SetStateAction<any>>;
}

const AuthContext = createContext<AuthContextType>(undefined as any);

export default AuthContext;