export async function fetcher(url: string){
    const promise = await fetch(url);
    const response = await promise.json();
    return response.data;
}

export function groupByKey<T>(array: T[], key: keyof T): Record<string, T[]>{
    return array.reduce((accumulator, currentValue) => {
        const keyValue = currentValue[key];
        const groupKey = keyValue as unknown as string;

        if(!accumulator[groupKey]){
            accumulator[groupKey] = [];
        }

        accumulator[groupKey].push(currentValue);
        return accumulator;
    }, {} as Record<string, T[]>);
}