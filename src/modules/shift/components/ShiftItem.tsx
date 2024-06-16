import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Agent } from '../../auth/types/AuthType';
import {Service} from "../../shift/types/shift"
import useChannel from '../../pusher/hooks/useChannel';
import { toast } from 'react-toastify';

export default function ShiftItem({agent}: {agent: Agent}) {

  const [ag, setAg] = useState<Agent>(agent);

  const {channel} = useChannel();

  useEffect(() => {
    if(channel){
      channel.bind(`shift:${ag.uuid}:service:take`, (data: Service) => {
        toast.success(`${ag.matricule} took his shift (${data.entity.name})`)
        setAg((old: Agent) => ({
          ...old,
          Service: [
            ...old.Service,
            data
          ]
        }));
      });
      channel.bind(`shift:${ag.uuid}:service:leave`, (data: Service) => {
        toast.error(`${ag.matricule} left his shift (${data.entity.name})`)
        setAg((old: Agent) => ({
          ...old,
          Service: old.Service.filter((service: Service) => service.id !== data.id)
        }));
      })
    }

    return(() => {
      if(channel){
        channel.unbind(`shift:${ag.uuid}:service:take`);
        channel.unbind(`shift:${ag.uuid}:service:leave`);
      }
    })
  }, [channel])

  return (
    <Link to={`/agents/${agent.uuid}`} className={classNames(
        "rounded-full p-1 w-8 h-8 min-w-8 min-h-8 flex items-center justify-center ring-2 ring-gray-200",
        "hover:z-50 hover:scale-105",
        ag.Service.map((item) => item.entity.code === "SASPS" || item.entity.code === "SASPN").includes(true) ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
    )}>
        {ag.matricule}
    </Link>
  );
}