import { useContext } from "react";
import SwrContext from "../context/SwrContext";

const useSwrContext = () => useContext(SwrContext);

export default useSwrContext;