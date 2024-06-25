import classNames from "classnames";
import { Link } from "react-router-dom";
import { Agent } from "../../../auth/types/AuthType";
import Button from "../../../core/design-system/Button";
import { EyeIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Delete } from "../../../core/services/CrudService";
import { mutate } from "swr";
import { toast } from "react-toastify";

interface AgentItemType {
    agent: Agent
}

export default function Small({agent}: AgentItemType) {

    const deleteItem = () => {
        Delete('agents', agent).then(() => {
            mutate('/api/agents');
            toast.success("Agent successfully deleted");
        })
    }

  return (
    <div className={classNames(
        "bg-white rounded-lg shadow-md p-4 flex flex-col justify-between gap-4 relative"
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
        <div className="flex justify-between gap-2">
            <Link to={`/agents/${agent.uuid}`}>
                <Button>
                        <EyeIcon className="h-4" />
                        <span className="hidden 2xl:block">View</span>
                </Button>
            </Link>
            <Button variant='delete' onClick={deleteItem} >
                <TrashIcon className="h-4" />
                <span className="hidden 2xl:block">Delete</span>
            </Button>
        </div>
    </div>
  );
}
