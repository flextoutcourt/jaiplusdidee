import { PropsWithChildren, useState } from "react"
import AuthContext from "../context/AuthContext";

const AuthProvider = ({children}: PropsWithChildren) => {

    const [user, setUser] = useState<any>(undefined as any);

    const value = {
        user, setUser
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;