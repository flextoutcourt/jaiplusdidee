import { User } from "../../auth/types/AuthType";

export interface CarType {
    id: number;
    uuid: string;
    brand: string;
    model: string;
    immat: string;
    owner: User;
    type: string;
    stolen: boolean;
    created_at: Date;
    updated_at: Date;
    deleted: boolean
}