export async function login(matricule: string, password: string){
    const promise = await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify({
            matricule, password
        }),
        headers: {
            "Content-Type": 'application/json'
        }
    });
    const response = await promise.json();
    return response;
}

export async function logout(){

}