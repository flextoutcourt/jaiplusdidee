import { Dispatch, SetStateAction } from "react";

export interface BackupType {

    id:number;
    uuid: string;

}

export interface BackupContextType {
    backups: BackupType[];
    setBackups: Dispatch<SetStateAction<BackupType[]>>
}