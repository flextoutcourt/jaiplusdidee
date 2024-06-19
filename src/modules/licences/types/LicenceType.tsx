import { Agent, User } from "../../auth/types/AuthType";

export interface LicenceType {
    id: number;
    uuid: string;
    type: string;
    DeliveredBy: Agent;
    Civilian: User;
    valid: boolean;
    created_at: Date;
    updated_at: Date; 
    deleted: boolean;
}