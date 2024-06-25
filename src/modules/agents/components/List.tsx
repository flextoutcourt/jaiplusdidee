import useSWR from 'swr';
import { fetcher } from '../../core/utils/functions';
import Small from './Details/Small';
import { Agent } from '../../auth/types/AuthType';
import useNavbarContext from '../../core/hooks/useNavbarContext';
import { useEffect } from 'react';

export default function AgentList({items}: {items: Agent[]}) {

  const {setTitle} = useNavbarContext();

  useEffect(() => {
    setTitle('Agents')
  }, [setTitle]);

  return (
    <>
        <div className="search">
            
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items?.map((item, key) => (
                <Small key={key} agent={item} />
            ))}
        </div>
    </>
  );
}
