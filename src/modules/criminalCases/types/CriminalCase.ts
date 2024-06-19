import { User } from "../../auth/types/AuthType";
import { Case } from "../../cases/types/caseType";

export interface CriminalCase {
    id: number;
    uuid: string;
    Records: CriminalRecord[];
    Civilian: User;
    created_at: Date;
    updated_at: Date;
    deleted: boolean;
}

export interface CriminalRecord {
    id: number;
    uuid: string;
    reason: string;
    content: string;
    Case: Case;
    caseId: number;
    CriminalCase: CriminalCase;
    criminalCaseId: number;
    created_at: Date;
    updated_at: Date;
    deleted: false;
}