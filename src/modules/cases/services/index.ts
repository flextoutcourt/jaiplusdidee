import { Case } from "../types/caseType";

export const getCases = ():Case[] => {
    return [];
}

export const getCase = ():Case => {
    return ;
}

export const setCase = ():Case => {
    return ;
}

export const updateCase = ({id}: {id: number}): Case => {
    return ;
}

export const deleteCase = ({id}: {id: number}) => {
    try{

    }catch(e: any){
        return {message: e.message, status: 400}
    }
}