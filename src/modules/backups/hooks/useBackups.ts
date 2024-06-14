import { useContext } from "react";
import BackupContext from "../context/BackupContext";

const useBackups = () => useContext(BackupContext);
export default useBackups;