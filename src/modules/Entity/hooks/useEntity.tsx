import { useContext } from "react";
import EntityContext from "../context/EntityContext";

const useEntity = () => useContext(EntityContext);

export default useEntity;