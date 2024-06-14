import { PropsWithChildren, useState } from "react"
import EntityContext from "../context/EntityContext";

const EntityProvider = ({children}: PropsWithChildren) => {

    const [entity, setEntity] = useState(undefined as any);

    const value = {entity, setEntity};

    return(
        <EntityContext.Provider value={value}>
            {children}
        </EntityContext.Provider>
    )

}

export default EntityProvider;