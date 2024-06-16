import { SetStateAction } from "jotai";
import { Channel } from "pusher-js";
import { Dispatch, createContext } from "react";

interface ChannelContextType{
    channel: Channel;
    setChannel: Dispatch<SetStateAction<Channel>>
}

const ChannelContext = createContext<ChannelContextType>(undefined as any);

export default ChannelContext;