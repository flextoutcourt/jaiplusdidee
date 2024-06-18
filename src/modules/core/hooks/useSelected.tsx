import { useContext } from "react";
import SelectContext from "../context/SelectContext";

const useSelected = () => useContext(SelectContext);

export default useSelected;