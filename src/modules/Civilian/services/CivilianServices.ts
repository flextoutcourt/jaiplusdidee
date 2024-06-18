import { toast } from 'react-toastify';
import { User } from './../../auth/types/AuthType';
import { mutate } from 'swr';

export const DeleteMany = async (array: User[]) => {
    const promise = await fetch("/api/civilians", {
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

export const Delete = async (user: User) => {
    const promise = await fetch(`/api/civilians/${user.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": 'application/json'
        }
    })
    const response = await promise.json();
    return response;
}

export const Reintegrate = async (user: User) => {
    const promise = await fetch(`/api/civilians/${user.id}`, {
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