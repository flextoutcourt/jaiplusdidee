export async function fetcher(url: string){
    const promise = await fetch(url);
    const response = await promise.json();
    return response.data;
}