export type User = {
    id: number;
    uuid: string;
    firstname: string;
    lastname: string;
    alias: string;
    phone: string;
    dateOfBirth: Date;
}

export type Agent = {
    id: number;
    uuid: string;
    matricule: string;
    since: Date;
    password: string;
    Civilian: User;
}

export type Entity = {
    // SASP S, SASP N, SPECIAL, SAMD, SAFD, MAIRIE, GOUV, PRES
    name: 'SASP SUD'|'SASP NORD'|'SAMD'|'SAFD'|'MAIRIE'|'GOUV'|'PRESIDENT'|'PRESSE'
}

export type Group ={
    name: "DOA"|'CRIME'|'HP'|'PS'
}