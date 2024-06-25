import { useContext } from "react";
import CivilianContext from "../context/CivilianContext";

const useCivilian = () => useContext(CivilianContext);

export default useCivilian;