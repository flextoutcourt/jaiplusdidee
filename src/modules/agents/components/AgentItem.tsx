import classNames from "classnames";
import { Agent } from "../../auth/types/AuthType";
import Button, { B } from "../../core/design-system/Button";

interface AgentItemType {
    agent: Agent
}

export default function AgentItem({agent}: AgentItemType) {

  return (
    <div className={classNames(
        agent.deleted && "bg-red-300",
        "bg-gray-200 rounded-lg shadow-md p-4 flex flex-col gap-4 relative"
    )}>
        <div className={classNames(
            agent.online ? 'bg-green-500' : 'bg-red-500',
            "absolute top-1 left-1 px-1 bg-red-500 rounded-full text-xs"
        )}>online</div>
        <div className="flex items-center justify-start gap-4">
            <img src="https://picsum.photos/560" className="w-12 rounded-full shadow-lg" />
            <div>
                <p className="font-bold">Mehdi Soulax #66</p>
                <p className="text-xs text-gray-500">Supreme commander</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
            <Button>Edit</Button>
            <Button variant="delete">Delete</Button>
        </div>
    </div>
  );
}
