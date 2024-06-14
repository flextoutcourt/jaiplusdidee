import Pusher from "pusher-js";
import { Dispatch, SetStateAction, createContext } from "react";

export interface PusherContextType{
    pusher: Pusher;
    setPusher: Dispatch<SetStateAction<Pusher>>;
}

const PusherContext = createContext<PusherContextType>(undefined as any);

export default PusherContext;