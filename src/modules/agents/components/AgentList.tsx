import React, { useEffect, useState } from 'react';
import AgentItem from './AgentItem';
import { get } from '../services';

export default function AgentList() {

  return (
    <>
        <div className="search">
            
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[0,1,2,3,4,5].map((item, key) => (
                <AgentItem key={key} agent={item} />
            ))}
        </div>
    </>
  );
}
