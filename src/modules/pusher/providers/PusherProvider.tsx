import { PropsWithChildren, useEffect, useState } from "react"
import PusherContext from "../context/PusherContext";
import Pusher from "pusher-js";

const PusherProvider = ({children}: PropsWithChildren) => {

    const [pusher, setPusher] = useState<Pusher>(undefined as any);

    useEffect(() => {
        if(!pusher){
            const pusher = new Pusher(import.meta.env.VITE_APP_KEY, {
                cluster: 'eu'
            });
            pusher.connect();
            setPusher(pusher);
        }
    }, [setPusher])

    const value = {pusher, setPusher}

    return(
        <PusherContext.Provider value={value}>
            {children}
        </PusherContext.Provider>
    )

}

export default PusherProvider;