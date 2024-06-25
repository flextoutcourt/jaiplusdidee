import { Agent } from '../../auth/types/AuthType';

export const DeleteMany = async (array: Agent[]) => {
    const promise = await fetch("/api/agents", {
        method: 'DELETE',
        body: JSON.stringify({
            ids: array.map((item) => item.id)
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const response = await promise.json();
    return response
}

export const Delete = async (agent: Agent) => {
    const promise = await fetch(`/api/agents/${agent.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": 'application/json'
        }
    })
    const response = await promise.json();
    return response;
}

export const Reintegrate = async (agent: Agent) => {
    const promise = await fetch(`/api/civilians/${agent.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            deleted: false
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const response = await promise.json();
    return response;
}