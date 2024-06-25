export async function DeleteMany<T extends {id: number}>(url: string, array: T[]): Promise<any>{
    try{
        const response  = await fetch("/api/civilians", {
            method: 'DELETE',
            body: JSON.stringify({
                ids: array.map((item) => item.id)
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(!response.ok){
            throw new Error(`Http error! status ${response.status}`)
        }
        return await response.json();
    }catch(error){
        console.error(error);
        throw error;
    }
}

export async function Delete<T extends {id: number}>(endpoint: string, item: T): Promise<any>{
    const promise = await fetch(`/api/${endpoint}/${item.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": 'application/json'
        }
    })
    const response = await promise.json();
    return response;
}

export async function Reintegrate<T extends {id: number}>(item: T): Promise<any> {
    const promise = await fetch(`/api/civilians/${item.id}`, {
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