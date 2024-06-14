import { Dispatch, SetStateAction } from "react";

export interface BackupType {



}

export interface BackupContextType {
    backups: BackupType[];
    setBackups: Dispatch<SetStateAction<BackupType[]>>
}