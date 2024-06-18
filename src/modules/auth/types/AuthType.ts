import { Service } from "../../shift/types/shift";

export type User = {
    id: number;
    uuid: string;
    firstname: string;
    lastname: string;
    alias: string;
    phone: string;
    dateOfBirth: Date;
    deleted: boolean;
}

export type Agent = {
    id: number;
    uuid: string;
    matricule: string;
    since: Date;
    password: string;
    deleted: boolean;
    Civilian: User;
    Service: Service[];
    Entities: Entity[];
    Grade: Grade;
}

export type Grade = {
    name: string;
    rank: string
}

export type Entity = {
    code: 'SASPN'|'SASPS'|'DOA'|'CRIME'|'HP'|'HRT';
    name: 'SASP SUD'|'SASP NORD'|'SAMD'|'SAFD'|'MAIRIE'|'GOUV'|'PRESIDENT'|'PRESSE';
}

export type Group ={
    name: "DOA"|'CRIME'|'HP'|'PS'
}