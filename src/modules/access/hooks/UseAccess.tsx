import { useContext } from "react";
import AccessContext from "../context/AccessContext";

const useAccess = () =>  useContext(AccessContext);

export default useAccess;