import { PropsWithChildren, useState } from "react";
import AccessContext from "../context/AccessContext";

const AccessProvider = ({children}: PropsWithChildren) => {

    const [resources, setResources] = useState<any[]>(undefined as any);

    const value = {
        resources, setResources
    }

    return(
        <AccessContext.Provider value={value}>
            {children}
        </AccessContext.Provider>
    )
    
}

export default AccessProvider;