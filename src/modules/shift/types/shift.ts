import {Agent} from "./../../auth/types/AuthType";

export interface Service {
    id: number;
    agent: Agent;
    entity: any
}