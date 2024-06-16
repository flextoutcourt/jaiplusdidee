import classNames from "classnames";
import { Link } from "react-router-dom";
import { Agent } from "../../auth/types/AuthType";
import Button from "../../core/design-system/Button";

interface AgentItemType {
    agent: Agent
}

export default function AgentItem({agent}: AgentItemType) {

    console.log(agent);

  return (
    <div className={classNames(
        agent.deleted && "bg-red-300",
        "bg-gray-200 rounded-lg shadow-md p-4 flex flex-col gap-4 relative"
    )}>
        <div className={classNames(
            agent.Service.length > 0 ? 'bg-green-600' : 'bg-red-600',
            "absolute -top-1 -left-1 px-2 py-0.5 rounded-full text-xs text-white"
        )}>
            {agent.Service.length > 0 ? "In Shift" : 'Out Shift'}
        </div>
        <div className="flex items-center justify-start gap-4">
            <img src="https://picsum.photos/560" className="w-12 rounded-full shadow-lg" />
            <div>
                <p className="font-bold">{agent.Civilian.firstname} {agent.Civilian.lastname} {agent.matricule}</p>
                <p className="text-xs text-gray-500">{agent.Grade.name}</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <Link to={`/agents/${agent.uuid}`}><Button>Edit</Button></Link>
            <Button variant="delete">Delete</Button>
        </div>
    </div>
  );
}
