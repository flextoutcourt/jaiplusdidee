import classNames from 'classnames';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Agent } from '../../auth/types/AuthType';
import useChannel from '../../pusher/hooks/useChannel';

export default function ShiftItem({agent}: {agent: Agent}) {

  const {channel} = useChannel();

  useEffect(() => {
    channel.bind(`shift:${agent.uuid}:service:take`, (data: any) => {
      // data normally contains a new {Service} it has to be added to agent.Services
      console.log(data);
    });
    channel.bind(`shift:${agent.uuid}:service:leave`, (data: any) => {
      // data normmaly contains the id of the service that has to be removed from agent.Services
      console.log(data);
    })
  }, [channel])

  return (
    <Link to={`/agents/${agent.uuid}`} className={classNames(
        "rounded-full p-1 w-8 h-8 min-w-8 min-h-8 flex items-center justify-center ring-2 ring-gray-200",
        "hover:z-50 hover:scale-105",
        agent.Service.map((item) => item.entity.code === "SASPS" || item.entity.code === "SASPN").includes(true) ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
    )}>
        {agent.matricule}
    </Link>
  );
}
