import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Agent } from '../../auth/types/AuthType';
import { fetcher } from '../../core/utils/functions';
import useChannel from '../../pusher/hooks/useChannel';
import usePusher from '../../pusher/hooks/usePusher';
import ShiftItem from './ShiftItem';
import ShiftSearch from './ShiftSearch';
import { filter } from '../utils/shift';

export default function ShiftList() {

    const {pusher, setPusher} = usePusher();
    const {setChannel} = useChannel();

    const {data} = useSWR('/api/agents', fetcher);
    const [viewable, setViewable] = useState<Agent[]>(data);

    useEffect(() => {
        const channel = pusher.subscribe('shift_channel');
        setChannel(channel);
    }, [setPusher, setChannel])

    const handleChange = (e: any) => {
        if(e.target.value == ''){
            setViewable(data);
        }
        const a = filter(data, e)
        setViewable(a)
    }

  return (
    <>
        <ShiftSearch handleChange={handleChange} />
        <div className="flex -space-x-2 flex-nowrap overflow-x-auto py-4 no-scrollbar -mr-4">
            {viewable && viewable.map((agent, key) => (
                <ShiftItem agent={agent} key={agent.uuid + key} />
            ))}
        </div>
    </>
  );
}
