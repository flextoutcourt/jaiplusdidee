import React, { useEffect, useState } from 'react';
import AgentItem from './AgentItem';
import { get } from '../services';
import useSWR from 'swr';
import { fetcher } from '../../core/utils/functions';

export default function AgentList() {

  const {data} = useSWR('/api/agents', fetcher);

  return (
    <>
        <div className="search">
            
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data?.map((item, key) => (
                <AgentItem key={key} agent={item} />
            ))}
        </div>
    </>
  );
}
