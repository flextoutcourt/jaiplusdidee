import { PropsWithChildren, useState } from "react"
import AuthContext from "../context/AuthContext";
import { Agent } from "../types/AuthType";
import { useAtom } from "jotai";
import authAtom from "./../states/authAtom"

const AuthProvider = ({children}: PropsWithChildren) => {

    const [user, setUser] = useAtom(authAtom)

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