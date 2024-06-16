import { Agent } from "../../auth/types/AuthType"

export const filter = (array: Agent[], e: any) => {
    return array.filter((agent: Agent) => 
        agent.matricule.includes(e.target.value)
        || agent.Civilian.firstname.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        || agent.Civilian.lastname.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        || agent.Civilian.alias.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    )
}