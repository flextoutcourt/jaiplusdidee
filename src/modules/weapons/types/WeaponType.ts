import { Agent, User } from "../../auth/types/AuthType";

export interface WeaponType {
    id: string;
    uuid: string;
    name: string;
    type: string;
    Civilian?: User;
    Agent?: Agent;
    Evidence: any;
    created_at: Date;
    updated_at: Date;
    deleted: boolean;
}