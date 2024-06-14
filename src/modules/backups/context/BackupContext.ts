import { createContext } from "react";
import { BackupContextType } from "../types/BackupType";

const BackupContext = createContext<BackupContextType>(undefined as any);

export default BackupContext;