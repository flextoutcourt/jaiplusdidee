import { Channel } from 'pusher-js';
import { PropsWithChildren, useState } from 'react';
import ChannelContext from '../context/ChannelContext';

export default function ChannelProvider({children}: PropsWithChildren) {

    const [channel, setChannel] = useState<Channel>(undefined as any);

    const value = {channel, setChannel};

  return (
    <ChannelContext.Provider value={value}>
        {children}
    </ChannelContext.Provider>
  );
}
