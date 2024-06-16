import { useContext } from "react";
import ShiftContext from "../context/ShiftContext";

const useShift = () => useContext(ShiftContext);

export default useShift;